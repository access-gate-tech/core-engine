import { z } from "zod";

export const policyRuleSchema = z.object({
  match: z.record(z.string(), z.string()),
  effect: z.enum(["allow", "deny"]),
});

export const policyDocumentSchema = z.object({
  package: z.string(),
  rules: z.array(policyRuleSchema),
});
