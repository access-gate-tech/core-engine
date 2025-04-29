# AccessGate Core Engine

[![CI](https://github.com/access-gate-tech/core-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/access-gate-tech/core-engine/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/access-gate-tech/core-engine/graph/badge.svg?token=N7ENLQIYT9)](https://codecov.io/gh/access-gate-tech/core-engine)

The core engine is a fundamental component of the AccessGate project, providing policy evaluation and access control capabilities.

## Overview

This package serves as the core engine for AccessGate, offering:

- Policy evaluation engine
- Condition evaluators
- Context-based access control
- Policy validation
- Type-safe interfaces

## Installation

```bash
npm install @accessgate/core-engine
```

## Usage

### Basic Policy Evaluation

```typescript
import { evaluatePolicy } from "@accessgate/core-engine";
import { Policy, Context, DecisionEffect } from "@accessgate/core-engine";

const policy: Policy = {
  conditions: [
    { operator: "EQUAL", field: "role", value: "admin" },
    { operator: "GREATER_THAN", field: "age", value: "18" },
  ],
};

const context: Context = {
  role: "admin",
  age: 25,
};

const decision = await evaluatePolicy(policy, context);
// Returns: DecisionEffect.ALLOW or DecisionEffect.DENY or DecisionEffect.ERROR
```

### Available Operators

The engine supports the following operators:

- `EQUAL` - Equality comparison
- `GREATER_THAN` - Greater than comparison
- `LESS_THAN` - Less than comparison
- `AND` - Logical AND of multiple conditions
- `OR` - Logical OR of multiple conditions
- `NOT` - Logical NOT of a condition

### Complex Policy Example

```typescript
const complexPolicy: Policy = {
  conditions: [
    { operator: "EQUAL", field: "role", value: "admin" },
    {
      operator: "OR",
      conditions: [
        { operator: "GREATER_THAN", field: "age", value: "18" },
        { operator: "EQUAL", field: "department", value: "IT" },
      ],
    },
  ],
};
```

## Project Structure

```
src/
├── core/           # Core engine implementation
│   └── evaluatorEngine.ts
├── decision/       # Decision effect definitions
│   └── decision.ts
├── evaluators/     # Condition evaluators
│   ├── equal.ts
│   ├── greaterThan.ts
│   ├── lessThan.ts
│   ├── logicalAnd.ts
│   ├── logicalOr.ts
│   ├── logicalNot.ts
│   └── index.ts
├── models/         # Type definitions and models
│   ├── context.ts
│   ├── operator.ts
│   └── policy.ts
├── utils/          # Utility functions
│   └── match.ts
├── validator/      # Policy validation
│   └── policySchema.ts
└── types.ts        # Additional type definitions
```

## Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run build` - Build the project
- `npm run dev` - Watch mode for development
- `npm test` - Run tests
- `npm test -- --coverage` - Run tests with coverage report

## Testing

The project maintains 100% code coverage across all files and includes comprehensive tests for:

- Policy evaluation engine
- All condition evaluators
- Policy validation
- Edge cases and error handling

## Dependencies

- zod: ^3.22.4 - For schema validation

### Dev Dependencies

- typescript: ^5.3.3
- vitest: ^1.4.0
- @vitest/expect: ^1.4.0
- @vitest/coverage-v8: ^1.4.0

## License

This project is licensed under the terms of the license included in the repository.

## Contributing

Please read the contributing guidelines before submitting pull requests.

## Support

For support, please open an issue in the repository.
