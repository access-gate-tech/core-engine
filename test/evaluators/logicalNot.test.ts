import { describe, it, expect } from "vitest";
import { logicalNot } from "../../src/evaluators/logicalNot";
import { Operator } from "../../src/models/operator";

describe("logicalNot evaluator", () => {
  it("should return false when condition is true", async () => {
    const context = { role: "admin" };
    const condition = {
      operator: Operator.EQUAL,
      field: "role",
      value: "admin",
    };
    expect(await logicalNot(context, condition)).toBe(false);
  });

  it("should return true when condition is false", async () => {
    const context = { role: "user" };
    const condition = {
      operator: Operator.EQUAL,
      field: "role",
      value: "admin",
    };
    expect(await logicalNot(context, condition)).toBe(true);
  });

  it("should handle nested conditions", async () => {
    const context = { role: "user", age: 15 };
    const condition = {
      operator: Operator.AND,
      conditions: [
        { operator: Operator.EQUAL, field: "role", value: "admin" },
        { operator: Operator.GREATER_THAN, field: "age", value: "18" },
      ],
    };
    expect(await logicalNot(context, condition)).toBe(true);
  });
});
