import { evaluatePolicy } from "../src/engines/opaLikeEngine";
import { test, expect } from "vitest";

test("allow read for admin", () => {
  const result = evaluatePolicy(
    {
      package: "test",
      rules: [
        {
          match: {
            action: "read",
            resource: "campaign/*",
            "subject.role": "admin",
          },
          effect: "allow",
        },
      ],
    },
    {
      action: "read",
      resource: "campaign/001",
      subject: { role: "admin" },
    }
  );

  expect(result.allowed).toBe(true);
});
