# ADR 0003: Semantic Background Colors

## Status

Accepted

## Context

The card background is a major visual cue in the target heating UX.

The desired semantics are:

- Yellow means the room is actively heating.
- Green means the thermostat is active but currently not heating.
- Gray means the thermostat is off, in frost protection, unavailable, or otherwise not actively controlling comfort temperature.

## Decision

The card uses semantic background colors as a primary state cue.

The first implementation must support these visual states:

| Background | Meaning |
|---|---|
| Yellow | Actively heating |
| Green | Thermostat active but not heating |
| Gray | Off, frost protection, unavailable, or not controlling comfort temperature |

The exact color tokens are implementation details and must be theme-aware. The card must not copy manufacturer-specific colors or trade dress.

## Accessibility constraint

Background color must never be the only state indicator.

The card must also show explicit state text.

## Consequences

- State extraction must produce a normalized visual state.
- Rendering tests must verify the mapping between normalized state and semantic background class/token.
- The window-open state is an overlay/status condition and does not replace the underlying thermostat background state.
