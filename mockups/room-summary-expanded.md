# Mockup Specification: Room Summary Expanded

## Purpose

The expanded room summary is a richer single-room card for dashboards with more space.

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
│ [Open details]                               │
└──────────────────────────────────────────────┘
```

## Required elements

- Room name
- Explicit state text
- Current temperature
- Target temperature
- Larger target control area
- Optional humidity indicator
- Optional window indicator
- Optional last-updated text
- Detail action

## Interaction

Service semantics must be identical to compact mode.

## Acceptance criteria

- Expanded mode adds information without changing behavior.
- The target control remains the primary interactive element.
- The card remains readable in a two-column dashboard.
- State text remains visible when state color is present.
