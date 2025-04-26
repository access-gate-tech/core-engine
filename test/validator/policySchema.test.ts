import { describe, it, expect } from "vitest";
import {
  policyRuleSchema,
  policyDocumentSchema,
} from "../../src/validator/policySchema";

describe("policyRuleSchema", () => {
  it("should validate correct rule", () => {
    const validRule = {
      match: { action: "read", resource: "document" },
      effect: "allow",
    };
    expect(() => policyRuleSchema.parse(validRule)).not.toThrow();
  });

  it("should reject invalid effect", () => {
    const invalidRule = {
      match: { action: "read", resource: "document" },
      effect: "invalid",
    };
    expect(() => policyRuleSchema.parse(invalidRule)).toThrow();
  });

  it("should reject missing match", () => {
    const invalidRule = {
      effect: "allow",
    };
    expect(() => policyRuleSchema.parse(invalidRule)).toThrow();
  });

  it("should reject missing effect", () => {
    const invalidRule = {
      match: { action: "read", resource: "document" },
    };
    expect(() => policyRuleSchema.parse(invalidRule)).toThrow();
  });
});

describe("policyDocumentSchema", () => {
  it("should validate correct document", () => {
    const validDocument = {
      package: "test",
      rules: [
        {
          match: { action: "read", resource: "document" },
          effect: "allow",
        },
      ],
    };
    expect(() => policyDocumentSchema.parse(validDocument)).not.toThrow();
  });

  it("should reject missing package", () => {
    const invalidDocument = {
      rules: [
        {
          match: { action: "read", resource: "document" },
          effect: "allow",
        },
      ],
    };
    expect(() => policyDocumentSchema.parse(invalidDocument)).toThrow();
  });

  it("should reject missing rules", () => {
    const invalidDocument = {
      package: "test",
    };
    expect(() => policyDocumentSchema.parse(invalidDocument)).toThrow();
  });

  it("should reject empty rules array", () => {
    const invalidDocument = {
      package: "test",
      rules: [],
    };
    expect(() => policyDocumentSchema.parse(invalidDocument)).toThrow();
  });
});
