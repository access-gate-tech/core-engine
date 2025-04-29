import { Context } from "../models/context";

export function lessThan(
  context: Context,
  field: string,
  value: number
): boolean {
  return context[field] < value;
}
