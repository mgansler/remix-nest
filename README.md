# Remix.run & Nest.js with Prisma.io Proof of Concept

- [Remix](https://remix.run)
- [Nest](https://nestjs.com)
- [Prisma](https://www.prisma.io)

This repo is nothing more but a proof of concept of serving a Remix app from a Nest.js backend (both build on top of
express, after all)

To see it in action install the dependencies and run `dev:remix` and `dev:run`.

## Motivation

While Remix is great for CRUD applications you would need a separate service for "backend" stuff, for example scheduled
tasks.

## How does it work

There is a Nest.js [Middleware](https://docs.nestjs.com/middleware) (see `src/remix.middelware.ts`), that is configured
for all routes but `api/*` (see `src/app.module.ts`). The code from the middleware is pretty much copied from the
Remix `Express Server` template. Routing for the web application is handled by Remix.

## Open TODOs

- Linting
- E2E (Cypress)
- Hot reloading (if possible)
- Cleanup tsconfig.json

## Project Structure

- `app/` - Remix app directory
- `.cache/` - Remix cache directory
- `public/` - Remix public directory
- `prisma/` - Prisma
- `src/` - Nest.js backend
