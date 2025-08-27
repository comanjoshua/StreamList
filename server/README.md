# StreamList Authentication Module

This module demonstrates secure password storage using **bcrypt**.

## How it works
- **hashPassword(password)** → hashes a plain text password with a unique salt.
- **verifyPassword(password, storedHash)** → compares a plain text password with a stored hash.

## Example
```bash
node server/auth.js
