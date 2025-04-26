# Contributing to AccessGate

Thank you for your interest in contributing to AccessGate! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/access-gate-tech/core-engine.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run tests:

   ```bash
   npm test
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Making Changes

1. **Code Style**

   - Follow the TypeScript style guide
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Keep functions small and focused

2. **Testing**

   - Write tests for new features
   - Ensure all tests pass
   - Maintain or improve test coverage
   - Follow the existing test patterns in `test/` directory

3. **Documentation**
   - Update documentation for new features
   - Add JSDoc comments for public APIs
   - Update README.md if necessary
   - Document any breaking changes

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation with details of any new environment variables, exposed ports, etc.
3. Ensure all tests pass
4. The PR will be merged once you have the sign-off of at least one other developer

## Commit Messages

Follow these guidelines for commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:

```
feat: add new policy validation rule

- Add support for custom validation rules
- Update documentation
- Add tests for new functionality

Closes #123
```

## Development Workflow

1. **Feature Development**

   - Create a feature branch from `main`
   - Implement the feature
   - Write tests
   - Update documentation
   - Create a pull request

2. **Bug Fixes**

   - Create a bug fix branch from `main`
   - Fix the bug
   - Add tests to prevent regression
   - Create a pull request

3. **Code Review**
   - All code must be reviewed before merging
   - Address review comments
   - Keep the PR up to date with the main branch

## Project Structure

```
accessgate-backend/
├── src/                    # Source code
│   ├── validator/         # Validation logic
│   └── ...
├── test/                  # Test files
├── package.json          # Project configuration
└── README.md            # Project documentation
```

## Questions and Support

If you have questions or need support:

- Open an issue
- Join our community chat
- Check the documentation

## License

By contributing to AccessGate, you agree that your contributions will be licensed under the project's license.
