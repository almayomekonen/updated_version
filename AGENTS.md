# AGENTS.md

## Project Overview

JobSearch AI is a job-search application built with Next.js App Router.

Core stack:

- JavaScript and JSX only; no TypeScript.
- React for UI components.
- MongoDB with Mongoose for persistence.
- JWT-based authentication using HTTP-only cookies.
- Apify for external job-data retrieval.

Use the installed versions and dependencies in `package.json` as the
source of truth. Do not assume an AI provider, Apify Actor, or external
API schema that is not configured in the project.

## Before Making Changes

- Read the relevant implementation and `package.json`.
- Check `README.md` and applicable repository instructions.
- Follow existing naming, styling, and architectural conventions.
- Keep changes focused on the requested task.
- Do not introduce dependencies or broad refactors without a clear need.
- Never overwrite unrelated user changes.

## Project Organization

- `app/`: App Router pages, layouts, and Route Handlers.
- `app/api/`: HTTP endpoints, including Google authentication routes.
- `actions/`: Server Actions, including authentication actions.
- `components/auth/`: Authentication UI.
- `components/home/`: Homepage sections.
- `components/jobs/`: Job cards, lists, and search forms.
- `components/layout/`: Shared navigation and branding.
- `components/ui/`: Reusable UI primitives.
- `lib/`: Shared server integrations, authentication, sessions,
  validation, and utilities.
- `models/`: Mongoose models.
- `public/`: Static assets.

Keep pages focused on composition. Put reusable UI in `components/`
and reusable business logic in appropriate modules.

## JavaScript and React

- Use `.js` for logic and Route Handlers.
- Use `.jsx` for React components.
- Do not add `.ts`, `.tsx`, TypeScript annotations, or TypeScript config.
- Use functional components and hooks.
- Follow the project's existing import aliases and export conventions.
- Reuse existing UI components before creating new ones.

## Next.js App Router

- Use App Router conventions; do not introduce the Pages Router.
- Keep components as Server Components by default.
- Add `"use client"` only when browser APIs, state, event handlers,
  or client-side hooks are required.
- Keep database access, JWT signing, and secret-bearing API calls
  on the server.
- Use Server Actions for suitable UI mutations and Route Handlers
  for HTTP endpoints.
- Treat Server Actions and Route Handlers as public entry points:
  validate input and enforce authorization inside each operation.
- Pass only serializable, necessary data to Client Components.
- Keep authenticated responses out of shared caches.
- Follow APIs supported by the installed Next.js version.

## Authentication and Sessions

- Reuse `lib/auth.js`, `lib/session.js`, and `actions/auth.js`.
- Store session JWTs in HTTP-only cookies.
- Never store authentication tokens in localStorage or sessionStorage.
- Verify JWT signatures and expiration before trusting claims.
- Keep signing secrets and sensitive user data out of client bundles,
  responses, and logs.
- Use `Secure` cookies in production and an appropriate `SameSite`
  policy compatible with the authentication flow.
- Align cookie expiration with session expiration.
- Enforce authentication and resource ownership on the server.
- Protect cookie-authenticated mutations against CSRF.
- Clear the session cookie during logout.
- Preserve and validate OAuth state in the Google login flow.
- Validate redirect destinations to prevent open redirects.
- Never store or log plaintext passwords. Preserve secure password
  hashing for password-based authentication.

## MongoDB and Mongoose

- Reuse the connection helper in `lib/db.js`.
- Reuse existing connections instead of opening one per operation.
- Define models in `models/`.
- Reuse registered Mongoose models to avoid development reload errors.
- Validate input before database operations.
- Never pass unfiltered client objects into queries or updates.
- Validate identifiers and enforce ownership for user-specific data.
- Return only required fields; exclude password hashes and secrets.
- Convert database results into suitable plain data before passing
  them to Client Components.

## Apify Integration

- Call Apify exclusively from server-side code.
- Keep Apify API tokens in server-only environment variables.
- Never expose tokens through `NEXT_PUBLIC_` variables.
- Inspect `lib/drushim.js` and existing integration code before adding
  another job-data integration module.
- Use the configured Actor or Task and its documented input schema.
- Do not invent Actor IDs, field names, or response formats.
- Validate search inputs and normalize results for the job components.
- Distinguish empty results from failed or unfinished runs.
- Handle timeouts, rate limits, failed runs, and malformed output.
- Bound polling and retries; avoid duplicate paid runs.
- Do not launch paid Apify runs during tests without explicit approval.

## UI and User Experience

- Preserve the existing visual language and styling conventions.
- Keep layouts responsive and controls accessible.
- Use semantic HTML, form labels, and visible keyboard focus.
- Provide loading, empty, success, and error states where relevant.
- Preserve search inputs when a request fails.
- Display external job descriptions as untrusted content; avoid
  rendering unsanitized HTML.

## Configuration and Validation

- Follow existing environment-variable names and validation patterns.
- Never commit credentials or real `.env` values.
- Document new configuration with placeholder values.
- Check `package.json` for available scripts before running commands.
- Run relevant lint, tests, and build checks when available.
- Add focused tests for meaningful behavior changes, especially
  authentication, authorization, validation, and data normalization.
- Mock external services for automated tests.
- Report what changed, which checks ran, and any remaining limitations.
- Never claim a check passed unless it was actually run successfully.
