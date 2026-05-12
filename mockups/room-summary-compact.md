# Mockup Specification: Room Summary Compact

## Purpose

The compact room summary is the default dashboard surface for one room.

## Layout intent

```text
┌────────────────────────────────────┐
│ Living Room                 Heating │
│                                    │
│ 21.4 °C                            │
│ Current                            │
│                                    │
│ Target 22.0 °C                     │
│                                    │
│ Humidity 48 %       Window closed  │
│                                    │
│        [ − ]      [ + ]      [ ⋯ ] │
└────────────────────────────────────┘
```

## Required elements

- Room name
- User-facing state text
- Current temperature
- Target temperature
- Optional humidity indicator
- Optional window indicator
- Decrease button
- Increase button
- Details button

## Interaction

- Decrease button lowers target temperature by the effective step size.
- Increase button raises target temperature by the effective step size.
- Details button opens the native Home Assistant more-info dialog for the configured climate entity.

## Acceptance criteria

- Current and target temperature are visible without opening details.
- Heating state is visible as text.
- Optional indicators disappear cleanly when no entity is configured.
- Controls have accessible labels.
- The card remains readable in a narrow mobile column.
