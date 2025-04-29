import { Condition } from "../models/policy";
import { Context } from "../models/context";
import { Operator } from "../models/operator";

import { equal } from "./equal";
import { greaterThan } from "./greaterThan";
import { lessThan } from "./lessThan";
import { logicalAnd } from "./logicalAnd";
import { logicalOr } from "./logicalOr";
import { logicalNot } from "./logicalNot";

export async function evaluateCondition(
  context: Context,
  condition: Condition
): Promise<boolean> {
  switch (condition.operator) {
    case Operator.EQUAL:
      return equal(context, condition.field!, condition.value);
    case Operator.GREATER_THAN:
      return greaterThan(context, condition.field!, Number(condition.value));
    case Operator.LESS_THAN:
      return lessThan(context, condition.field!, Number(condition.value));
    case Operator.AND:
      return logicalAnd(context, condition.conditions!);
    case Operator.OR:
      return logicalOr(context, condition.conditions!);
    case Operator.NOT:
      return logicalNot(context, condition.conditions![0]);
    default:
      throw new Error(`Unknown operator: ${condition.operator}`);
  }
}
