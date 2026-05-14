# HA Climate Relay Card

A Home Assistant HACS dashboard/plugin Custom Card for a room-first heating user experience.

## Project status

This repository is in the product and UX prework phase.

No production implementation exists yet. The current focus is to define:

- Product direction
- UX principles
- Target screens
- Manual override UX flow
- Auto mode configuration
- Card configuration model
- HACS repository strategy
- Quality gates
- Implementation roadmap
- Codex bootstrap prompt

## Strategic decision

The previous backend integration approach is frozen. The Custom Card is now the leading product artifact.

The first version must work directly with existing Home Assistant entities:

- Required: `climate_entity`
- Optional: `humidity_entity`
- Optional: `window_entity`

## Non-goals for the first implementation phase

- No backend-first architecture
- No hidden browser-side rule engine
- No schedule evaluation in the frontend
- No cross-room orchestration
- No manufacturer app clone
- No copied brand, logo, wording, layout, or trade dress

## Documentation

- [Product Direction](docs/product-direction.md)
- [UX Principles](docs/ux-principles.md)
- [Target Screens](docs/target-screens.md)
- [Manual Override UX Flow](docs/manual-override-ux-flow.md)
- [Auto Mode Configuration](docs/auto-mode-configuration.md)
- [Configuration Model](docs/configuration-model.md)
- [HACS Repository Strategy](docs/hacs-repository-strategy.md)
- [Quality Gates](docs/quality-gates.md)
- [Implementation Roadmap](docs/implementation-roadmap.md)
- [Codex Bootstrap Prompt](docs/codex-bootstrap-prompt.md)

## Architecture stance

The planned implementation is a Lit-based Home Assistant Custom Card written in strict TypeScript.

The frontend must remain a presentation and interaction layer over Home Assistant state and services. It must not become a rule engine.

## Language policy

All repository artifacts are written in English:

- Source code
- Comments
- Filenames
- Tests
- Documentation
- CI workflows
- Release notes
