import { describe, it, expect } from "vitest";
import { greaterThan } from "../../src/evaluators/greaterThan";

describe("greaterThan evaluator", () => {
  it("should return true when value is greater than target", () => {
    const context = { age: 25 };
    expect(greaterThan(context, "age", 18)).toBe(true);
  });

  it("should return false when value is less than target", () => {
    const context = { age: 15 };
    expect(greaterThan(context, "age", 18)).toBe(false);
  });

  it("should return false when value equals target", () => {
    const context = { age: 18 };
    expect(greaterThan(context, "age", 18)).toBe(false);
  });

  it("should handle undefined field", () => {
    const context = {};
    expect(greaterThan(context, "age", 18)).toBe(false);
  });
});
