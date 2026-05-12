# Mockup Specification: Loading State

## Purpose

The loading state avoids layout jumps before Home Assistant state is available.

## Layout intent

```text
┌────────────────────────────────────┐
│ Living Room                 Loading│
│                                    │
│ --.- °C                            │
│ Current                            │
│                                    │
│ Target --.- °C                     │
│                                    │
│        [ − ]      [ + ]      [ ⋯ ] │
└────────────────────────────────────┘
```

## Behavior

- Controls are disabled while the climate entity state is unavailable.
- The card must not show stale or invented temperature values.
- The layout should remain close to the final layout to avoid visual jumps.

## Acceptance criteria

- The loading state is visually stable.
- No misleading temperature value is shown.
- No service call can be triggered before required state is available.
