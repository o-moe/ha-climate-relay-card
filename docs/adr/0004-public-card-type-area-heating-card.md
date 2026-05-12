# ADR 0004: Public Card Type Uses Area Heating Terminology

## Status

Accepted

## Context

The repository is named `ha-climate-relay-card`, but the public Home Assistant YAML API should use terminology that is idiomatic for Home Assistant users.

Home Assistant uses areas as the native abstraction for physical rooms or spaces. The product remains a room-first heating UX, but the card should not expose backend-oriented or project-internal naming in user YAML.

## Decision

Use the following public card type:

```yaml
type: custom:area-heating-card
```

Keep the repository name:

```text
ha-climate-relay-card
```

## Rationale

- `area` aligns with Home Assistant terminology.
- `heating` describes the user-facing product capability.
- The card type does not expose the previous backend relay concept.
- The name remains compatible with a future area-aware configuration model.

## Consequences

- Documentation examples must use `custom:area-heating-card`.
- The implementation must register the custom element as `area-heating-card`.
- The planned build artifact is `dist/area-heating-card.js`.
- The repository name can remain project-oriented without leaking into the YAML API.
