# Target Screens

## 1. Room Summary Card — Compact

### Purpose

Primary dashboard card for one room.

### Required content

- Room name
- Current temperature
- Target temperature
- Heating state indicator
- Optional humidity indicator
- Optional window indicator
- Increase/decrease target temperature controls
- Detail action

### Visual hierarchy

1. Room name
2. Current temperature
3. Target temperature and state
4. Secondary indicators
5. Controls

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
- The card remains usable at narrow mobile widths.

## 2. Room Summary Card — Expanded

### Purpose

A richer single-room card for dashboards with more space.

### Required content

Everything from compact mode, plus:

- Larger target control area
- More explicit state text
- Optional last-updated information
- Optional preset display if exposed by the climate entity

### Acceptance criteria

- Expanded mode adds information but does not change service semantics.
- Expanded mode uses the same yellow, green, and gray background semantics as compact mode.
- Expanded mode remains readable in a two-column dashboard.
- Controls remain accessible via keyboard and pointer input.

## 3. Native More-info Detail Flow

### Purpose

Secondary interaction surface for less frequent controls and diagnostics.

### Initial approach

Use Home Assistant's native more-info dialog for the configured `climate_entity`.

### Rationale

Native more-info avoids duplicating Home Assistant climate behavior and reduces maintenance risk.

### Acceptance criteria

- The detail action opens the relevant Home Assistant more-info dialog.
- The default card remains usable without a custom detail implementation.

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
