import { describe, it, expect } from "vitest";
import { AuthorizationRequest, PolicyDocument } from "../../src/types";
import { evaluatePolicy } from "../../src/engines/opaLikeEngine";

describe("evaluatePolicy", () => {
  const policy: PolicyDocument = {
    package: "test",
    rules: [
      {
        match: {
          action: "read",
          resource: "document/*",
          "subject.role": "admin",
        },
        effect: "allow",
      },
      {
        match: {
          action: "write",
          resource: "document/*",
          "subject.role": "editor",
        },
        effect: "allow",
      },
      {
        match: {
          action: "*",
          resource: "document/private/*",
        },
        effect: "deny",
      },
    ],
  };

  it("should allow matching rule", () => {
    const request: AuthorizationRequest = {
      action: "read",
      resource: "document/123",
      subject: { role: "admin" },
    };
    const result = evaluatePolicy(policy, request);
    expect(result).toEqual({
      allowed: true,
      reason: "matched rule (allow)",
    });
  });

  it("should deny matching rule", () => {
    const request: AuthorizationRequest = {
      action: "read",
      resource: "document/private/123",
      subject: { role: "admin" },
    };
    const result = evaluatePolicy(policy, request);
    expect(result).toEqual({
      allowed: false,
      reason: "matched rule (deny)",
    });
  });

  it("should deny when no rule matches", () => {
    const request: AuthorizationRequest = {
      action: "delete",
      resource: "document/123",
      subject: { role: "viewer" },
    };
    const result = evaluatePolicy(policy, request);
    expect(result).toEqual({
      allowed: false,
      reason: "no matching rule",
    });
  });

  it("should handle wildcard action", () => {
    const request: AuthorizationRequest = {
      action: "delete",
      resource: "document/private/123",
      subject: { role: "admin" },
    };
    const result = evaluatePolicy(policy, request);
    expect(result).toEqual({
      allowed: false,
      reason: "matched rule (deny)",
    });
  });

  it("should handle nested subject properties", () => {
    const request: AuthorizationRequest = {
      action: "write",
      resource: "document/123",
      subject: { role: "editor", department: "IT" },
    };
    const result = evaluatePolicy(policy, request);
    expect(result).toEqual({
      allowed: true,
      reason: "matched rule (allow)",
    });
  });
});
