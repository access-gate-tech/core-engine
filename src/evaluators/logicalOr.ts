import { Condition } from "../models/policy";
import { Context } from "../models/context";
import { evaluateCondition } from ".";

export async function logicalOr(
  context: Context,
  conditions: Condition[]
): Promise<boolean> {
  for (const condition of conditions) {
    if (await evaluateCondition(context, condition)) {
      return true;
    }
  }
  return false;
}
