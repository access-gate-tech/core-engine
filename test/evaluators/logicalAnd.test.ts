import { describe, it, expect } from "vitest";
import { logicalAnd } from "../../src/evaluators/logicalAnd";
import { Operator } from "../../src/models/operator";

describe("logicalAnd evaluator", () => {
  it("should return true when all conditions are true", async () => {
    const context = { role: "admin", age: 25 };
    const conditions = [
      { operator: Operator.EQUAL, field: "role", value: "admin" },
      { operator: Operator.GREATER_THAN, field: "age", value: "18" },
    ];
    expect(await logicalAnd(context, conditions)).toBe(true);
  });

  it("should return false when any condition is false", async () => {
    const context = { role: "user", age: 15 };
    const conditions = [
      { operator: Operator.EQUAL, field: "role", value: "admin" },
      { operator: Operator.GREATER_THAN, field: "age", value: "18" },
    ];
    expect(await logicalAnd(context, conditions)).toBe(false);
  });

  it("should return true for empty conditions array", async () => {
    const context = { role: "admin" };
    expect(await logicalAnd(context, [])).toBe(true);
  });

  it("should handle nested conditions", async () => {
    const context = { role: "admin", age: 25, department: "IT" };
    const conditions = [
      { operator: Operator.EQUAL, field: "role", value: "admin" },
      {
        operator: Operator.AND,
        conditions: [
          { operator: Operator.GREATER_THAN, field: "age", value: "18" },
          { operator: Operator.EQUAL, field: "department", value: "IT" },
        ],
      },
    ];
    expect(await logicalAnd(context, conditions)).toBe(true);
  });
});
