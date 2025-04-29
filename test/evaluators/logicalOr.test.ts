import { describe, it, expect } from "vitest";
import { logicalOr } from "../../src/evaluators/logicalOr";
import { Operator } from "../../src/models/operator";

describe("logicalOr evaluator", () => {
  it("should return true when any condition is true", async () => {
    const context = { role: "user", age: 25 };
    const conditions = [
      { operator: Operator.EQUAL, field: "role", value: "admin" },
      { operator: Operator.GREATER_THAN, field: "age", value: "18" },
    ];
    expect(await logicalOr(context, conditions)).toBe(true);
  });

  it("should return false when all conditions are false", async () => {
    const context = { role: "user", age: 15 };
    const conditions = [
      { operator: Operator.EQUAL, field: "role", value: "admin" },
      { operator: Operator.GREATER_THAN, field: "age", value: "18" },
    ];
    expect(await logicalOr(context, conditions)).toBe(false);
  });

  it("should return false for empty conditions array", async () => {
    const context = { role: "admin" };
    expect(await logicalOr(context, [])).toBe(false);
  });

  it("should handle nested conditions", async () => {
    const context = { role: "user", age: 15, department: "HR" };
    const conditions = [
      { operator: Operator.EQUAL, field: "role", value: "admin" },
      {
        operator: Operator.OR,
        conditions: [
          { operator: Operator.GREATER_THAN, field: "age", value: "18" },
          { operator: Operator.EQUAL, field: "department", value: "IT" },
        ],
      },
    ];
    expect(await logicalOr(context, conditions)).toBe(false);
  });
});
