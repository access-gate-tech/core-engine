# Security Policy

## Supported Versions

We currently support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of AccessGate seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to [SECURITY_EMAIL_PLACEHOLDER].

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the following information in your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

This information will help us triage your report more quickly.

## Security Best Practices

When working with AccessGate, please follow these security best practices:

1. **Policy Management**

   - Regularly review and audit your policy rules
   - Follow the principle of least privilege
   - Validate all policy inputs using the provided schemas
   - Keep policy documents up to date

2. **Access Control**

   - Implement proper authentication before policy evaluation
   - Use secure session management
   - Regularly rotate credentials and access tokens
   - Monitor and log access attempts

3. **Code Security**
   - Keep dependencies up to date
   - Use the latest stable version of AccessGate
   - Follow secure coding practices
   - Implement proper input validation

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.0 -> 1.0.1). We recommend always using the latest patch version of your current major version.

## Security Acknowledgments

We would like to thank all security researchers who have responsibly reported security vulnerabilities to us. Their contributions help make AccessGate more secure for everyone.

## Additional Resources

- [Issue Tracker](https://github.com/access-gate-tech/core-engine/issues)
- [Contributing Guidelines](CONTRIBUTING.md)
