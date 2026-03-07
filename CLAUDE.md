# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Open Profiler is an open-source Angular 21+ portfolio/personal profile template (v1.3.1). It's a single-page application designed to be forked and customized via JSON configuration files. Users showcase their skills, experience, projects, and contact info without modifying code.

**Repository**: https://github.com/Til0r/open-profiler

## Build & Development Commands

```bash
# Start dev server
npm start

# Production build (output: dist/open-profiler/)
npm run build

# Watch mode for development
npm run watch

# Run tests (Jasmine + Karma)
npm test

# Lint code (ESLint with Angular rules)
npx ng lint

# Format code with Prettier
npx prettier --write "src/**/*.{ts,json,scss,md}"
```

## Architecture

### Core Patterns

- **Standalone Components**: All components use `standalone: true` — no NgModules
- **Signals-based State**: Uses Angular Signals (`input()`, `signal()`, `computed()`) for component state
- **No Global State Management**: No NgRx or other store — data flows from JSON config via signals
- **OnPush Change Detection**: Components use `ChangeDetectionStrategy.OnPush`
- **Single Page**: No routing (`app.routes.ts` is empty) — all sections render on one page
- **Template Control Flow**: Uses `@if`, `@for`, `@else` syntax (Angular 17+)
- **Configuration-Driven**: All portfolio content defined in `config/open-profiler.config.json`

### Directory Structure

```
src/app/
├── app.component.ts            # Root component — loads config, sets theme
├── app.config.ts               # Angular bootstrap configuration
├── app.routes.ts               # Empty (no routing)
├── shared/
│   ├── config/
│   │   └── open-profiler.config.ts   # Config loader service
│   ├── constants/
│   │   └── theme.constant.ts         # Theme CSS variable mappings
│   ├── directives/
│   │   └── image-error-handler.directive.ts  # Hides broken images
│   ├── elements/                     # Reusable UI components
│   │   ├── badges/                   # Skills badges with icons
│   │   ├── experience/               # Experience/education cards
│   │   └── socials/                  # Social link icons
│   ├── models/                       # TypeScript interfaces (10+)
│   │   ├── open-profiler.model.ts    # Root data model
│   │   ├── experience.model.ts
│   │   ├── project.model.ts
│   │   ├── badge.model.ts
│   │   └── ...
│   └── utils/
│       └── badges.util.ts            # Icon link mapper
├── environments/
│   └── environments.ts
config/                               # External config (project root)
├── open-profiler.config.json         # Main portfolio data
└── seo.config.json                   # SEO metadata
```

### Data Model

All content comes from `config/open-profiler.config.json` implementing `OpenProfilerModel`:

| Field         | Type               | Purpose                              |
| ------------- | ------------------ | ------------------------------------ |
| `about`       | `string`           | HTML-formatted bio                   |
| `banner`      | `BannerModel`      | Name, role, city, avatar, socials    |
| `badges`      | `BadgesModel`      | Skills organized by category         |
| `contact`     | `ContactModel`     | Email and contact info               |
| `projects`    | `ProjectModel[]`   | Portfolio project cards              |
| `color`       | `ColorModel`       | Primary, dark/light theme colors     |
| `education`   | `ExperienceModel[]`| Education entries (sorted by date)   |
| `experiences` | `ExperienceModel[]`| Work experience (nested children OK) |

### Naming Conventions

- **Component selectors**: `open-profiler-*` prefix (kebab-case) — e.g., `<open-profiler-badges>`
- **Directive selectors**: camelCase attribute — e.g., `imageErrorHandler`
- **Path aliases** (`tsconfig.json`):
  - `@open-profiler/models/*`, `@open-profiler/config/*`, `@open-profiler/constants/*`
  - `@open-profiler/utils/*`, `@open-profiler/directives/*`, `@open-profiler/elements/*`
  - `@open-profiler/env/*`, `@open-profiler/outer-config/*`

### Styling

- **Tailwind CSS v4** + SCSS for component styles
- CSS custom properties for runtime theming (dark/light mode)
- Dark mode toggle persisted in `localStorage`
- Responsive design via Tailwind breakpoints

### Key Features

- Banner, About, Education, Skills, Experience, Projects, Contact sections
- Dark/Light theme toggle with localStorage persistence
- Simple Icons integration (fetches SVGs from simpleicons.org)
- Image error handler directive (hides broken images)
- Chronological sorting via lodash `orderBy`
- Nested experience support (sub-roles within a position)

## Base Rules

## 1. Atomic Components

Every component must be atomic. Before creating a new component, check if one already exists in the project. If not, create it as a shared, reusable unit (component, utility, or shared class).

## 2. Reuse First

Templates and widgets must reuse components from the shared elements. Never duplicate logic or UI that already exists.

## 3. Styling

All styling must use TailwindCSS classes. No inline styles or custom CSS unless strictly necessary.

## 4. Type Safety

Use enums, maps, or typed constants instead of raw strings. Never pass magic strings as props, action types, or identifiers. **Never use `any`** — always create proper interfaces, types, or generics.

## 5. Documentation

Add TSDoc comments to all complex logic, non-obvious utilities, and public API surfaces of shared components.

## 6. Angular Code Flow

Use Angular Signals for local component state. Follow standard Angular patterns (standalone components, dependency injection, lifecycle hooks).

## 7. Date Handling

Use Moment.js for all date manipulation and formatting.

## 8. Simplicity Principle

Do not overcomplicate. Keep the configuration-driven approach — content changes should happen in JSON config files, not in component code.

## 9. No Methods in Templates for Data Binding

Never call functions or methods in templates to return or compute values. Use instead: Signals, computed signals, pure Pipes, or Directives. The only acceptable methods in templates are:

- **Event handlers** (`(click)`, `(submit)`, `(change)`, etc.)
- **Memoized functions** (functions whose output is cached and only recalculated when inputs change)

## 10. Naming Conventions & Typing

Follow strict naming conventions:

- **Interfaces** — Prefix with `I`: `IUser`, `IOrderDetail`
- **Enums** — Prefix with `E`: `EOrderStatus`, `EPaymentMethod`
- **Generics** — Use typed generics (`T`, `K`, `V`) instead of `any`
- **Never use `any`** — If the type is unknown, use `unknown` and narrow it.

## 11. OnPush Change Detection

Every component must use `ChangeDetectionStrategy.OnPush`.

## 12. TrackBy in Loops

Always provide a `track` expression in `@for` when iterating over lists. Use a unique ID.

```html
@for (item of items; track item.id) {
<div>{{ item.name }}</div>
}
```

## 13. Subscription Management

Never leave subscriptions open. Use `takeUntilDestroyed()` from `@angular/core/rxjs-interop` or the `| async` pipe which auto-unsubscribes.

## 14. Single Responsibility

Each file should do one thing. One component, one service, one pipe, one directive per file.

## 15. Immutability

Never mutate state directly. Always create new references using spread operators, `map()`, `filter()`, or `structuredClone`.

## 16. Accessibility (a11y)

Every interactive element must be keyboard-accessible. Use semantic HTML. Add `aria-label` where visual context is missing. Never use `<div>` as a clickable element without a role.

## 17. Constants Over Magic Values

Extract all hardcoded values into typed constants files.

## Code Standards

- TypeScript strict mode enabled
- ESLint with angular-eslint rules
- Prettier formatting (100 char width, single quotes, 2-space indent)
- Husky + lint-staged pre-commit hooks (prettier + eslint + updatemetatag)

## CI/CD

GitHub Actions workflow (`.github/workflows/release.yml`) creates releases on git tag push — builds the project, creates a tar archive, and uploads to GitHub Releases.