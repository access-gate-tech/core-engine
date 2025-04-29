import { Policy } from "../models/policy";
import { Context } from "../models/context";
import { DecisionEffect } from "../decision/decision";
import { evaluateCondition } from "../evaluators";

export async function evaluatePolicy(
  policy: Policy,
  context: Context
): Promise<DecisionEffect> {
  try {
    for (const condition of policy.conditions) {
      const result = await evaluateCondition(context, condition);
      if (!result) {
        return DecisionEffect.DENY;
      }
    }
    return DecisionEffect.ALLOW;
  } catch (error) {
    return DecisionEffect.ERROR;
  }
}
