# Mockup Specification: Area Summary Compact

## Purpose

The compact area summary is the default dashboard glance surface for one Home Assistant area or room.

It is intentionally not a mini thermostat. Direct target-temperature controls are not shown on the first view.

## Layout intent

```text
┌────────────────────────────────────┐
│ Living Room                 Heating│
│                                    │
│ 21.4 °C                            │
│ Current                            │
│                                    │
│ Target 22.0 °C                     │
│                                    │
│ Humidity 48 %       Window closed  │
│                                    │
│ Tap to adjust                      │
└────────────────────────────────────┘
```

## Required elements

- Area or room name
- User-facing state text
- Current temperature
- Target temperature
- Optional humidity indicator
- Optional window indicator
- Subtle interaction affordance

## Explicitly excluded elements

- Decrease button
- Increase button
- Preset controls
- Schedule controls

## Interaction

- Clicking or tapping the card opens the next interaction surface.
- The first implementation may open Home Assistant's native more-info dialog for the configured climate entity.
- A custom expanded interaction surface may be introduced later if native more-info is not good enough for the target UX.

## Acceptance criteria

- Current and target temperature are visible without opening details.
- Heating state is visible as text.
- Optional indicators disappear cleanly when no entity is configured.
- No direct +/- controls are rendered on the compact first view.
- The card itself is clickable/tappable as the entry point to adjustment.
- The card remains readable in a narrow mobile column.
