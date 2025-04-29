import { Operator } from "./operator";

export interface Condition {
  operator: Operator;
  field?: string;
  value?: string;
  conditions?: Condition[];
}

export interface Policy {
  conditions: Condition[];
}
