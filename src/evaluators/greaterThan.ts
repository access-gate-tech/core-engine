import { Context } from "../models/context";

export function greaterThan(
  context: Context,
  field: string,
  value: number
): boolean {
  return context[field] > value;
}
