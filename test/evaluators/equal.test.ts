import { describe, it, expect } from "vitest";
import { equal } from "../../src/evaluators/equal";

describe("equal evaluator", () => {
  it("should return true when values match", () => {
    const context = { role: "admin" };
    expect(equal(context, "role", "admin")).toBe(true);
  });

  it("should return false when values do not match", () => {
    const context = { role: "user" };
    expect(equal(context, "role", "admin")).toBe(false);
  });
});
