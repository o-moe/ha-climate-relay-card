# Target Screens

## 1. Area Summary Card — Compact

### Purpose

Primary dashboard glance surface for one Home Assistant area or room.

The compact card is intentionally not a mini thermostat. It shows the relevant heating state and temperatures without exposing direct target-temperature controls on the first view.

### Required content

- Area or room name
- Current temperature
- Target temperature
- Heating state indicator
- Optional humidity indicator
- Optional window indicator

### Explicitly excluded from the first view

- Increase target temperature control
- Decrease target temperature control
- Preset controls
- Schedule controls

### Visual hierarchy

1. Area or room name
2. Current temperature
3. Target temperature and state
4. Secondary indicators
5. Interaction affordance through card tap/click

### Primary interaction

Clicking or tapping the compact card opens the next interaction surface.

The first implementation may use Home Assistant's native more-info dialog for this interaction surface. A later custom expanded interaction surface is allowed only if it is justified by a concrete UX need.

### Background state semantics

The card background communicates the dominant thermostat state:

| Background | User-facing meaning | Typical Home Assistant source state |
|---|---|---|
| Yellow | Heating | Climate entity is actively heating. |
| Green | Not heating | Climate entity is active but currently idle/not heating. |
| Gray | Off or frost protection | Climate entity is off, in frost protection, unavailable, or not controlling comfort temperature. |

The exact color values are implementation details and must remain theme-aware.

### Acceptance criteria

- The current temperature is visible without opening details.
- The target temperature is visible without opening details.
- Heating, idle, off, unavailable, and window-open states are distinguishable.
- Yellow, green, and gray background states follow the documented semantics.
- State is not communicated by color alone.
- Missing optional humidity or window entities do not leave visual gaps.
- No direct target-temperature +/- controls are rendered on the compact first view.
- The compact card is clickable/tappable as the entry point to more detailed interaction.
- The card remains usable at narrow mobile widths.

## 2. Area Interaction Surface — Expanded

### Purpose

A richer interaction surface for changing the target temperature after the user clicks or taps the compact card.

This can initially be implemented by opening Home Assistant's native more-info dialog for the configured `climate_entity`.

A custom expanded interaction surface may be implemented later if the native more-info dialog does not satisfy the desired heating UX.

### Required content if implemented as a custom surface

Everything from compact mode, plus:

- Larger target control area
- Increase target temperature control
- Decrease target temperature control
- More explicit state text
- Optional last-updated information
- Optional preset display if exposed by the climate entity

### Acceptance criteria

- The first compact view remains glance-focused and does not expose +/- controls.
- Target-temperature controls are available only after the user enters the interaction surface.
- Expanded mode uses the same yellow, green, and gray background semantics as compact mode.
- Expanded mode remains readable in a two-column dashboard if rendered inline.
- Controls remain accessible via keyboard and pointer input.

## 3. Native More-info Detail Flow

### Purpose

Initial secondary interaction surface for target-temperature changes, less frequent controls, and diagnostics.

### Initial approach

Clicking or tapping the compact card opens Home Assistant's native more-info dialog for the configured `climate_entity`.

### Rationale

Native more-info avoids duplicating Home Assistant climate behavior and reduces maintenance risk. It also keeps the first dashboard view visually clean.

### Acceptance criteria

- Clicking or tapping the compact card opens the relevant Home Assistant more-info dialog.
- The compact card remains usable without custom detail implementation.
- Direct +/- controls are not rendered on the compact first view.

## 4. Error / Configuration Problem State

### Purpose

Make broken configuration obvious.

### Cases

- Missing `climate_entity`
- Configured entity does not exist
- Entity exists but is not a climate entity
- Temperature attributes are missing or non-numeric
- Service call failed

### Acceptance criteria

- The card renders a clear error state instead of failing silently.
- The error message identifies the faulty configuration key or entity.
- Runtime service errors are surfaced without corrupting UI state.

## 5. Loading State

### Purpose

Avoid layout jumps before Home Assistant state is available.

### Acceptance criteria

- The card shows a stable placeholder while state is not yet available.
- The placeholder does not expose misleading temperature values.
- The card does not open an invalid interaction surface before the required climate entity state is known.

## 6. Window-open State

### Purpose

Surface the window condition without implementing a hidden automation rule.

### Initial behavior

The card displays a clear window-open state if `window_entity` is configured and reports an open state.

### Explicit non-behavior

The card does not automatically change the target temperature, HVAC mode, or schedule when a window is open.

### Background interaction

Window-open state is an overlay/status condition, not a replacement for the thermostat background semantics.

Example:

- Heating with open window still uses the heating background but must show a prominent window-open warning.
- Idle with open window still uses the idle background but must show a prominent window-open warning.
- Off/frost protection with open window still uses the gray background and the window-open warning.

### Acceptance criteria

- Window-open state is visible on the card.
- Window-open state does not hide the underlying thermostat state.
- The UI does not imply that the card has changed backend heating behavior.
- Any future blocking or pausing behavior must be implemented via explicit Home Assistant automation or backend support, not hidden frontend logic.
