import { AuthorizationRequest, OPAInput, PolicyDocument } from "../types";
import { flatten, matchGlob } from "../utils/match";

export function evaluatePolicy(
  policy: PolicyDocument,
  request: AuthorizationRequest
): { allowed: boolean; reason: string } {
  const input: OPAInput = {
    action: request.action,
    resource: request.resource,
    ...flatten({ subject: request.subject }),
  };

  // First check for deny rules
  for (const rule of policy.rules) {
    if (rule.effect === "deny") {
      const matched = Object.entries(rule.match).every(([key, val]) => {
        return matchGlob(val, input[key] || "");
      });

      if (matched) {
        return {
          allowed: false,
          reason: "matched rule (deny)",
        };
      }
    }
  }

  // Then check for allow rules
  for (const rule of policy.rules) {
    if (rule.effect === "allow") {
      const matched = Object.entries(rule.match).every(([key, val]) => {
        return matchGlob(val, input[key] || "");
      });

      if (matched) {
        return {
          allowed: true,
          reason: "matched rule (allow)",
        };
      }
    }
  }

  return { allowed: false, reason: "no matching rule" };
}
