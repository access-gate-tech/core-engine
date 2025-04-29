import { describe, it, expect } from "vitest";
import { evaluatePolicy } from "../../src/core/evaluatorEngine";
import { Policy } from "../../src/models/policy";
import { Operator } from "../../src/models/operator";
import { DecisionEffect } from "../../src/decision/decision";

describe("evaluatorEngine", () => {
  it("should return ALLOW when all conditions are true", async () => {
    const policy: Policy = {
      conditions: [
        { operator: Operator.EQUAL, field: "role", value: "admin" },
        { operator: Operator.GREATER_THAN, field: "age", value: "18" },
      ],
    };
    const context = { role: "admin", age: 25 };
    expect(await evaluatePolicy(policy, context)).toBe(DecisionEffect.ALLOW);
  });

  it("should return DENY when any condition is false", async () => {
    const policy: Policy = {
      conditions: [
        { operator: Operator.EQUAL, field: "role", value: "admin" },
        { operator: Operator.GREATER_THAN, field: "age", value: "18" },
      ],
    };
    const context = { role: "user", age: 15 };
    expect(await evaluatePolicy(policy, context)).toBe(DecisionEffect.DENY);
  });

  it("should return ERROR when evaluation throws an error", async () => {
    const policy: Policy = {
      conditions: [
        { operator: Operator.EQUAL, field: "role", value: "admin" },
        // Invalid operator to trigger error
        { operator: "INVALID" as Operator, field: "age", value: "18" },
      ],
    };
    const context = { role: "admin", age: 25 };
    expect(await evaluatePolicy(policy, context)).toBe(DecisionEffect.ERROR);
  });

  it("should return ALLOW for empty conditions array", async () => {
    const policy: Policy = {
      conditions: [],
    };
    const context = { role: "admin" };
    expect(await evaluatePolicy(policy, context)).toBe(DecisionEffect.ALLOW);
  });

  it("should handle nested conditions", async () => {
    const policy: Policy = {
      conditions: [
        { operator: Operator.EQUAL, field: "role", value: "admin" },
        {
          operator: Operator.AND,
          conditions: [
            { operator: Operator.GREATER_THAN, field: "age", value: "18" },
            { operator: Operator.EQUAL, field: "department", value: "IT" },
          ],
        },
      ],
    };
    const context = { role: "admin", age: 25, department: "IT" };
    expect(await evaluatePolicy(policy, context)).toBe(DecisionEffect.ALLOW);
  });

  it("should handle complex nested conditions with OR", async () => {
    const policy: Policy = {
      conditions: [
        { operator: Operator.EQUAL, field: "role", value: "admin" },
        {
          operator: Operator.OR,
          conditions: [
            { operator: Operator.GREATER_THAN, field: "age", value: "18" },
            { operator: Operator.EQUAL, field: "department", value: "IT" },
          ],
        },
      ],
    };
    const context = { role: "admin", age: 15, department: "HR" };
    expect(await evaluatePolicy(policy, context)).toBe(DecisionEffect.DENY);
  });
});
