# HACS Repository Strategy

## Repository type

This repository is a dedicated Home Assistant HACS dashboard/plugin repository for one Custom Card.

## Distribution target

The implementation phase must produce a compiled JavaScript module in `dist/` that can be loaded by Home Assistant as a dashboard resource.

Planned artifact:

```text
dist/ha-climate-relay-card.js
```

## Planned card type

```yaml
type: custom:ha-climate-relay-card
```

## Repository language policy

All repository artifacts must be English:

- Source code
- Comments
- Filenames
- Tests
- Documentation
- CI workflow names
- Release notes

## Planned top-level structure

```text
ha-climate-relay-card/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── release.yml
├── docs/
│   ├── product-direction.md
│   ├── ux-principles.md
│   ├── target-screens.md
│   ├── configuration-model.md
│   ├── hacs-repository-strategy.md
│   ├── quality-gates.md
│   ├── implementation-roadmap.md
│   ├── codex-bootstrap-prompt.md
│   └── adr/
├── mockups/
├── src/
├── test/
├── dist/
├── hacs.json
├── package.json
├── tsconfig.json
├── eslint.config.js
├── prettier.config.js
├── vite.config.ts
├── vitest.config.ts
├── README.md
├── CHANGELOG.md
├── LICENSE
└── SECURITY.md
```

## Planned implementation stack

- Lit-based Web Component
- TypeScript strict mode
- Vite build
- Vitest tests
- ESLint
- Prettier
- GitHub Actions CI

## Architectural stance

The implementation should keep these concerns separate:

- Configuration validation
- Home Assistant state extraction
- Service orchestration
- Rendering
- Styling

## HACS compatibility expectations

The repository must provide:

- A valid `hacs.json`
- A built file in `dist/`
- Clear installation instructions
- Versioned releases once public alpha starts
- A README that documents YAML configuration

## Release stance

No release should be created before:

- Target screens are documented
- Configuration model is documented
- Quality gates are implemented
- A manual Home Assistant smoke test has succeeded
