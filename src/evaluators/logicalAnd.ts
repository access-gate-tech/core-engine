import { evaluateCondition } from ".";
import { Context } from "../models/context";
import { Condition } from "../models/policy";

export async function logicalAnd(
  context: Context,
  conditions: Condition[]
): Promise<boolean> {
  for (const condition of conditions) {
    if (!(await evaluateCondition(context, condition))) {
      return false;
    }
  }
  return true;
}
