import { Context } from "../models/context";

export function equal(context: Context, field: string, value: any): boolean {
  return context[field] === value;
}
