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

  for (const rule of policy.rules) {
    const matched = Object.entries(rule.match).every(([key, val]) => {
      return matchGlob(val, input[key] || "");
    });

    if (matched) {
      return {
        allowed: rule.effect === "allow",
        reason: `matched rule (${rule.effect})`,
      };
    }
  }

  return { allowed: false, reason: "no matching rule" };
}
