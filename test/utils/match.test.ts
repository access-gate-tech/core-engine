import { describe, it, expect } from "vitest";
import { matchGlob, flatten } from "../../src/utils/match";

describe("matchGlob", () => {
  it("should match exact strings", () => {
    expect(matchGlob("test", "test")).toBe(true);
    expect(matchGlob("test", "other")).toBe(false);
  });

  it("should match wildcard pattern", () => {
    expect(matchGlob("*", "any")).toBe(true);
    expect(matchGlob("*", "")).toBe(true);
  });

  it("should match prefix pattern", () => {
    expect(matchGlob("test/*", "test/123")).toBe(true);
    expect(matchGlob("test/*", "other/123")).toBe(false);
    expect(matchGlob("test/*", "test")).toBe(false);
  });
});

describe("flatten", () => {
  it("should flatten simple object", () => {
    const input = { a: "1", b: "2" };
    expect(flatten(input)).toEqual({ a: "1", b: "2" });
  });

  it("should flatten nested object", () => {
    const input = { a: { b: "1", c: "2" } };
    expect(flatten(input)).toEqual({ "a.b": "1", "a.c": "2" });
  });

  it("should flatten deeply nested object", () => {
    const input = { a: { b: { c: "1" } } };
    expect(flatten(input)).toEqual({ "a.b.c": "1" });
  });

  it("should handle null values", () => {
    const input = { a: null, b: "2" };
    expect(flatten(input)).toEqual({ a: "null", b: "2" });
  });

  it("should handle empty object", () => {
    expect(flatten({})).toEqual({});
  });
});
