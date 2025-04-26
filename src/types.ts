export type PolicyEffect = "allow" | "deny";

export interface PolicyRule {
  match: Record<string, string>;
  effect: PolicyEffect;
}

export interface PolicyDocument {
  package: string;
  rules: PolicyRule[];
}

export interface AuthorizationRequest {
  subject: Record<string, string>;
  action: string;
  resource: string;
}

export type OPAInput = {
  action: string;
  resource: string;
  [key: string]: string;
};
