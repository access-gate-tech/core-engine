import { describe, it, expect } from "vitest";
import { evaluateCondition } from "../../src/evaluators";
import { Operator } from "../../src/models/operator";

describe("evaluators index", () => {
  it("should throw error for unknown operator", async () => {
    const context = { role: "admin" };
    const condition = {
      operator: "UNKNOWN" as Operator,
      field: "role",
      value: "admin",
    };
    await expect(evaluateCondition(context, condition)).rejects.toThrow(
      "Unknown operator: UNKNOWN"
    );
  });

  it("should return false for missing field in EQUAL operator", async () => {
    const context = { role: "admin" };
    const condition = {
      operator: Operator.EQUAL,
      value: "admin",
    };
    expect(await evaluateCondition(context, condition)).toBe(false);
  });

  it("should return false for missing field in GREATER_THAN operator", async () => {
    const context = { age: 25 };
    const condition = {
      operator: Operator.GREATER_THAN,
      value: "18",
    };
    expect(await evaluateCondition(context, condition)).toBe(false);
  });

  it("should return false for missing field in LESS_THAN operator", async () => {
    const context = { age: 15 };
    const condition = {
      operator: Operator.LESS_THAN,
      value: "18",
    };
    expect(await evaluateCondition(context, condition)).toBe(false);
  });

  it("should handle missing conditions in AND operator", async () => {
    const context = { role: "admin" };
    const condition = {
      operator: Operator.AND,
    };
    await expect(evaluateCondition(context, condition)).rejects.toThrow();
  });

  it("should handle missing conditions in OR operator", async () => {
    const context = { role: "admin" };
    const condition = {
      operator: Operator.OR,
    };
    await expect(evaluateCondition(context, condition)).rejects.toThrow();
  });

  it("should handle missing conditions in NOT operator", async () => {
    const context = { role: "admin" };
    const condition = {
      operator: Operator.NOT,
    };
    await expect(evaluateCondition(context, condition)).rejects.toThrow();
  });
});
