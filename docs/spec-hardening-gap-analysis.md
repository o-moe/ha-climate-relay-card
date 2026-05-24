# Spec Hardening Gap Analysis

## Purpose

This document records the accepted gap-analysis findings before production implementation starts.

It exists to prevent drift between product direction, UX mockups, documentation, and later implementation tasks.

## Source of truth decisions

### Repository scope

The source of truth for the Custom Card product is this repository:

```text
o-moe/ha-climate-relay-card
```

When using local Codex workspaces, tasks must explicitly target the local checkout of this repository and must not drift into the frozen backend repository.

### Visual source of truth

The current visual source of truth is the static HTML mockup:

```text
mockups/html/index.html
mockups/html/styles.css
```

Older Markdown sketches or textual diagrams are secondary and must be updated or ignored when they conflict with the HTML mockup.

### Interaction surface decision

The Custom Interaction Surface is now the accepted UX target.

Home Assistant's native more-info dialog may remain a technical fallback or temporary phase-0 bridge, but it is no longer the accepted product target for the Area Heating Card interaction UX.

The accepted target interaction surface includes:

- Area name as the primary heading.
- Thermostat state as secondary information.
- `Edit Auto` entry point in the top-right area.
- Prominent current temperature.
- Centered target temperature control.
- Secondary metric chips for humidity and window state.
- Temperature end-state chips: `Auto | Manual | Next | Time`.

## Accepted gaps and decisions

### Native more-info vs custom interaction surface

Status: accepted gap, decision made.

Decision:

```text
Custom Interaction Surface is the product target.
Native more-info is only a fallback or transitional implementation aid.
```

Documentation and implementation tasks must not describe native more-info as the primary target UX.

### Compact card vs expanded flow specificity

Status: accepted gap.

Decision:

The compact card is already sufficiently constrained. The expanded interaction surface needs additional acceptance criteria before implementation, especially for:

- Open and close behavior.
- Pending service calls.
- Service call failures.
- Disabled controls.
- Unsupported climate features.
- Keyboard interaction.
- Screen-reader labels.

These details are not blockers for mockup work but are blockers for production implementation.

### Auto editor persistence

Status: accepted gap.

Decision:

The Auto editor is an accepted UX target, but production implementation must not start until persistence and execution ownership are decided.

The editor may collect schedule data visually, but the frontend card must not execute schedules in the browser.

### Browser-side schedule execution boundary

Status: accepted gap, existing rule confirmed.

Decision:

The card frontend must not evaluate recurring schedules or maintain timer-based Auto target updates.

Auto editor data must eventually be persisted into Home Assistant, an integration, generated helpers, blueprints, or another explicit execution layer.

### Manual override service contract

Status: accepted gap, deferred.

Decision:

The UX model for `Auto | Manual | Next | Time` is accepted. The service/action contract is not yet defined.

Before implementation, define how these actions are represented and applied:

- Return to Auto.
- Apply Manual.
- Apply Next.
- Apply Time.
- Store selected Time.
- Resolve next scheduled change.
- Surface service failures.

### Missing UX states

Status: accepted gap.

The following states require explicit UX decisions before implementation:

- Selecting time.
- Cancelled time selection.
- Invalid time selection.
- No next schedule available.
- Auto metadata unavailable.
- Unsupported climate features.
- Target temperature min/max reached.
- Climate entity read-only or not controllable.
- Service call in progress.
- Service call failure.
- Optional humidity entity unavailable.
- Optional window entity unavailable.
- Climate entity unavailable.
- Window open combined with unavailable climate state.

### Window override phase distinction

Status: accepted gap, decision made.

Decision:

For the current v1 target, `window_entity` is displayed as status on the card.

A higher-priority Window override is a product concept for a later explicit automation/integration layer. It must not be implied as active behavior in v1 unless explicitly implemented outside the frontend card.

### Away override phase distinction

Status: accepted gap, deferred.

Decision:

Away override remains conceptual and deferred.

It may appear in the priority model, but current UI and configuration work must not imply that Away detection or Away override behavior already exists.

### State label consistency

Status: accepted gap, decision made.

Decision:

Thermostat state and temperature end state must remain visually and semantically distinct.

Do not use combined GUI labels such as:

```text
Manual · Heating · until next schedule
```

Instead:

- Header: area name.
- Secondary header: thermostat state, for example `Heating`.
- End state: active chip, for example `Next`.
- Optional explanatory metadata: separate helper text outside the header, for example `Until next schedule`.

### Accessibility and theme criteria

Status: accepted gap.

Decision:

Before implementation, quality gates must be extended with concrete accessibility criteria:

- Visible focus states.
- Keyboard-operable controls.
- Semantic labels for target controls and end-state groups.
- Non-color-only state representation.
- Contrast requirements.
- Reduced-motion behavior where motion is used.
- Screen-reader behavior for temperature and state changes.

## Implementation blockers before production code

Production implementation must not start until these are explicitly decided:

1. Interaction surface lifecycle and opening behavior.
2. Auto editor persistence and execution owner.
3. Manual override service/action contract.
4. Time picker UX and data contract.
5. Handling of unavailable/unsupported entities.
6. Accessibility acceptance criteria.

## Acceptance criteria for this hardening pass

- Target screens document declares the Custom Interaction Surface as the accepted UX target.
- Native more-info is documented only as fallback or transitional behavior.
- HTML mockup is declared the visual source of truth.
- Window and Away override phase distinctions are explicit.
- Manual flow mockups do not collapse thermostat state and temperature end state into one header label.
- Auto editor remains GUI-first but implementation persistence remains deferred.
