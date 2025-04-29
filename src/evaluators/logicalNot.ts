import { Condition } from "../models/policy";
import { Context } from "../models/context";
import { evaluateCondition } from ".";

export async function logicalNot(
  context: Context,
  condition: Condition
): Promise<boolean> {
  return !(await evaluateCondition(context, condition));
}
