# AccessGate Core Engine

[![CI](https://github.com/access-gate-tech/core-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/access-gate-tech/core-engine/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/access-gate-tech/core-engine/graph/badge.svg?token=N7ENLQIYT9)](https://codecov.io/gh/access-gate-tech/core-engine)
[![npm version](https://badge.fury.io/js/%40accessgate%2Fcore-engine.svg)](https://badge.fury.io/js/%40accessgate%2Fcore-engine)

The core engine is a fundamental component of the AccessGate project, providing essential functionality and validation capabilities.

## Overview

This package serves as the core engine for AccessGate, offering:

- Validation utilities
- Type definitions
- Core engine functionality

## Installation

```bash
npm install @accessgate/core-engine
```

## Usage

```typescript
import /* your exports */ "@accessgate/core-engine";
```

## Project Structure

```
src/
├── engines/     # Core engine implementations
├── utils/       # Utility functions
├── validator/   # Validation logic
├── index.ts     # Main entry point
└── types.ts     # Type definitions
```

## Development

### Prerequisites

- Node.js
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
- `npm run test:coverage` - Run tests with coverage report

## Dependencies

- zod: ^3.22.4

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
