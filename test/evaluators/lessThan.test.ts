import { describe, it, expect } from "vitest";
import { lessThan } from "../../src/evaluators/lessThan";

describe("lessThan evaluator", () => {
  it("should return true when value is less than target", () => {
    const context = { age: 15 };
    expect(lessThan(context, "age", 18)).toBe(true);
  });

  it("should return false when value is greater than target", () => {
    const context = { age: 25 };
    expect(lessThan(context, "age", 18)).toBe(false);
  });

  it("should return false when value equals target", () => {
    const context = { age: 18 };
    expect(lessThan(context, "age", 18)).toBe(false);
  });

  it("should handle undefined field", () => {
    const context = {};
    expect(lessThan(context, "age", 18)).toBe(false);
  });
});
