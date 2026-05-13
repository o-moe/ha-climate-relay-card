# Manual Override UX Flow

## Purpose

This document defines the user-facing manual temperature override flow for the Area Heating Card.

It describes what the user sees and how the interaction behaves. It does not define the technical implementation.

Related visual mockup:

```text
mockups/html/index.html
```

## Scope

The flow applies to the interaction surface that appears after the user clicks or taps an area heating card.

The compact card remains a glance-first surface and does not expose direct target-temperature controls.

## Conceptual separation

The UI separates two concepts:

| Concept | Meaning | Examples |
|---|---|---|
| Thermostat state | What the thermostat is currently doing. | `Heating`, `Idle`, `Off`, `Frost protection` |
| Temperature end state | How long the currently selected target temperature remains valid. | `Auto`, `Manual`, `Next`, `Time` |

The thermostat state and the temperature end state must not be collapsed into one ambiguous label.

Examples:

- `Heating` describes that the room is actively heating.
- `Manual` describes that the target temperature is manually held.
- A room can therefore be `Manual · Heating`.
- A room can also be `Auto · Idle`, even though the compact UI may render only `Idle` as the thermostat state and `Auto` as a separate end-state chip.

## Compact glance representation

The compact card shows only a coarse end-state indicator:

```text
Auto | Manual
```

It does not show the full detail end states `Next` or `Time` on the compact card.

Rationale:

- The compact card is a glance-first surface.
- The user should immediately see whether the area follows the schedule or is manually overridden.
- Details such as `Next` or `Time` are reserved for the interaction surface.

Visual placement on the compact card:

```text
[Humidity]        [Auto/Manual]        [Window]
```

`Auto` means the area follows the schedule.

`Manual` means a manual override exists. The interaction surface can provide the precise end condition.

## Interaction surface end states

The interaction surface exposes four concise end-state options for the currently selected target temperature:

```text
Auto | Manual | Next | Time
```

### Auto

The area follows its heating schedule.

`Auto` is the normal starting state.

On the interaction surface, the thermostat state remains visible separately, for example:

```text
Living Room
Heating
```

The UI should not render `Auto · Heating` as a single top-line status if `Auto` is already visible as the active end-state chip.

### Manual

The selected target temperature is held until the user selects `Auto` or chooses another end state.

If an optional global manual reset is configured, `Manual` may also end through that global rule. This is documented as a global behavior and is not represented as a per-area end-state option.

### Next

The selected target temperature is held until the next scheduled temperature change.

### Time

The selected target temperature is held until a user-selected time.

Selecting `Time` requires a follow-up interaction to choose the end time.

## Visual placement on the interaction surface

On the interaction surface, the end-state options are rendered on the same horizontal level as the secondary metrics:

```text
[Humidity] [Window]                         [Auto] [Manual] [Next] [Time]
```

The currently active end state is visually emphasized. Inactive end states are visually subdued.

## Documentation outside GUI elements

Explanatory labels such as the following are documentation text and must not be rendered inside GUI cards:

```text
Before change
After +
Next selected
After + again
```

These labels can be used as explanatory text around mockups, but not as part of the mocked UI itself.

## State model

The UX flow has these states:

```text
auto
manual
next
selecting_time
time
```

`selecting_time` is an intermediate UI state and should not be treated as a persistent end state.

## Transition rules

| User action | Previous state | New state | Notes |
|---|---|---|---|
| Change target temperature | Auto | Manual | Manual becomes active automatically. |
| Change target temperature | Manual | Manual | The end state remains unchanged. |
| Change target temperature | Next | Next | The end state remains unchanged. |
| Change target temperature | Time | Time | The end state remains unchanged. |
| Select Auto | Manual / Next / Time | Auto | The area returns to schedule-driven behavior. |
| Select Manual | Auto / Next / Time | Manual | The current target temperature is held manually. |
| Select Next | Auto / Manual / Time | Next | The current target temperature is held until the next schedule change. |
| Select Time | Auto / Manual / Next | selecting_time | The user must choose an end time. |
| Confirm time | selecting_time | Time | The current target temperature is held until the selected time. |
| Cancel time selection | selecting_time | Previous stable state | No end-state change is applied. |

## Auto-to-Manual behavior

When the user changes the target temperature while `Auto` is active, the UI automatically switches the end state to `Manual`.

Rationale:

- `Auto` means the schedule controls the target temperature.
- A manual target temperature change means the user is intentionally overriding the schedule.
- Keeping `Auto` active after a manual target change would be ambiguous.

## Override persistence behavior

When the user changes the target temperature while a non-`Auto` end state is already active, the selected end state remains active.

Examples:

- If `Next` is active and the user increases the target temperature, `Next` stays active.
- If `Time` is active and the user changes the target temperature again, `Time` stays active.
- If `Manual` is active and the user changes the target temperature again, `Manual` stays active.

Rationale:

The user has already chosen the end condition. Adjusting the target temperature should not silently change that end condition.

## Time selection

The `Time` end state requires a follow-up interaction.

The interaction must allow the user to select a specific end time for the current override.

The exact visual treatment is not finalized yet. It may be a compact inline picker, popover, sheet, or native Home Assistant interaction depending on the later implementation strategy.

The current mockups document this requirement textually but do not yet define the final time-picker UI.

## Global manual reset

A global product setting may exist that resets manual temperature overrides at a configured time.

This setting is intentionally not represented as a per-area end-state option.

Rationale:

- It is global, not area-specific.
- It is not chosen from the area interaction surface.
- Showing it as a fifth end-state option would imply that the user can configure it per area.
- It would add complexity to the daily interaction surface without improving the core adjustment flow.

Documentation note:

```text
Manual may also end due to a global manual override reset if such a global setting is configured. This is an external/global rule and not part of the per-area end-state selection.
```

## Out of scope for this UX flow

The following topics are intentionally not defined here:

- Technical implementation using Home Assistant helpers, scripts, automations, or backend integration.
- Schedule data model.
- Timer implementation.
- Backend reset behavior.
- Cross-area orchestration.
- Window-open automation behavior.

## Acceptance criteria

- The compact card exposes only a coarse `Auto` or `Manual` end-state indicator.
- The compact card renders the coarse end-state indicator between humidity and window status.
- The interaction surface exposes `Auto`, `Manual`, `Next`, and `Time` as concise end-state options.
- The active end state is visually distinguishable from inactive end states.
- Thermostat state and temperature end state remain visually and semantically distinct.
- Changing the target temperature in `Auto` switches the end state to `Manual`.
- Changing the target temperature in `Manual`, `Next`, or `Time` keeps the current end state.
- Selecting `Auto` returns the area to schedule-driven behavior.
- Selecting `Time` requires a follow-up time-selection interaction.
- Documentation-only labels must not appear inside GUI mockup cards.
- The optional global manual reset is documented as a global rule and is not rendered as a per-area end-state option.
