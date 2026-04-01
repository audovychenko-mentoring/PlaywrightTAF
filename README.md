# PlaywrightTAF

Starter Playwright automation framework for the American Red Cross website.

## Prerequisites

- Node.js 18+
- npm

## Install

```bash
npm install
npx playwright install
```

## Run tests

```bash
npm test
```

## Run the smoke suite

```bash
npm run smoke
```

## Helpful scripts

- `npm run smoke`
- `npm run smoke:ci`
- `npm run smoke:headed`
- `npm run smoke:debug`
- `npm run test:ci`
- `npm run test:headed`
- `npm run test:ui`
- `npm run test:debug`
- `npm run typecheck`
- `npm run lint`
- `npm run lint:fix`
- `npm run format`
- `npm run format:check`
- `npm run ci:check`
- `npm run ci`
- `npm run verify`
- `npm run report`

## Quality Gates

This project now includes:

- ESLint for TypeScript and Playwright tests
- Prettier for formatting
- EditorConfig for consistent editor behavior
- CI-friendly npm scripts for local and pipeline validation

Recommended local flow:

```bash
npm run format
npm run lint
npm run typecheck
npm run smoke
```

One-command validation:

```bash
npm run verify
```

`npm run ci:check` is intended for fast pipeline checks, while
`npm run smoke:ci` runs the live-site smoke suite with CI-friendly reporting.

## Framework Architecture

This starter now follows a five-layer Playwright-friendly structure:

- Specs layer: `tests/specs` keeps the test cases and assertions.
- Fixtures layer: `tests/fixtures` provides custom Playwright fixtures for page objects and shared setup.
- Data layer: `tests/data` centralizes expected values, messages, and scenario data.
- Pages layer: `src/pages` owns locators and page-specific behavior.
- Core layer: `src/core` holds the shared framework foundation such as routes and base classes.

This layout keeps assertions in the spec layer, uses fixtures to create page objects, and keeps the page objects focused on locators and actions.

## CI Setup

A starter GitHub Actions workflow lives in `.github/workflows/ci.yml`.

- `quality` runs on push and pull request
- `smoke-live-site` runs only from manual dispatch because the target site may block some runners or IP ranges

## Note About Red Cross Access

The Red Cross site currently returns `HTTP 403 Access Denied` from this machine's network, even outside Playwright. The sample test will skip in that case so the framework stays usable, but real end-to-end coverage against `https://www.redcross.org` will require an allowlisted IP, VPN, or proxy that the site accepts.

## Folder Layout

```text
src/
  core/
  pages/
tests/
  data/
  fixtures/
  specs/
    smoke/
```
