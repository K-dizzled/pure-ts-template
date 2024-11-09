# TypeScript Project Template

This is a simple template for TypeScript projects. It includes some very basic setup for pure `ts`. Linter is configured with `eslint` and `prettier`. `Jest` is configured for testing. `commonjs` module syntax as could be seen in `tsconfig.json` is used for the project. `nvm` version configured in `.nvmrc` is `20.13.1`. Scripts are configured in such way that complete rebuild and formatting happend before `test` and `serve`, but that could be easily changed.

## Prerequisites

Setup the npm version via `nvm`:
```bash
nvm use
```

Install dependencies:
```bash
npm install
```

## Development

Run the entry point:
```bash
npm run serve
```

Run tests:
```bash
npm test
```
