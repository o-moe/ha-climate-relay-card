# Mockup Specification: Area Interaction Surface Expanded

## Purpose

The expanded area interaction surface is used after the user clicks or taps the compact card.

It is the place where target-temperature controls may appear.

## Layout intent

```text
┌──────────────────────────────────────────────┐
│ Living Room                                  │
│ Heating · target reachable                   │
│                                              │
│ Current                                      │
│ 21.4 °C                                      │
│                                              │
│ Target                                       │
│        [ − ]   22.0 °C   [ + ]              │
│                                              │
│ Humidity 48 %             Window closed      │
│ Last updated 2 min ago                       │
│                                              │
│ [Open native details]                        │
└──────────────────────────────────────────────┘
```

## Required elements if implemented as a custom surface

- Area or room name
- Explicit state text
- Current temperature
- Target temperature
- Larger target control area
- Optional humidity indicator
- Optional window indicator
- Optional last-updated text
- Optional native detail action

## Interaction

- Decrease button lowers target temperature by the effective step size.
- Increase button raises target temperature by the effective step size.
- Service semantics must be explicit and must use Home Assistant services.
- The first implementation may use Home Assistant's native more-info dialog instead of a custom expanded surface.

## Acceptance criteria

- The compact first view remains glance-focused and does not show direct +/- controls.
- Target controls are available only after click/tap interaction.
- Expanded mode adds interaction without changing hidden automation behavior.
- The target control is the primary interactive element on the expanded surface.
- The card remains readable in a two-column dashboard if rendered inline.
- State text remains visible when state color is present.
