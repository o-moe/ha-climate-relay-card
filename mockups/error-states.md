# Mockup Specification: Error States

## Purpose

Error states must make broken configuration or unavailable runtime state visible and actionable.

## Configuration error layout

```text
┌────────────────────────────────────┐
│ Configuration problem              │
│ climate_entity is required.        │
│                                    │
│ Check the card YAML configuration. │
└────────────────────────────────────┘
```

## Entity error layout

```text
┌────────────────────────────────────┐
│ Living Room                        │
│ Climate entity unavailable         │
│                                    │
│ climate.living_room is unavailable │
└────────────────────────────────────┘
```

## Service error layout

```text
┌────────────────────────────────────┐
│ Living Room                        │
│ Could not update target temperature│
│                                    │
│ Retry or check Home Assistant logs.│
└────────────────────────────────────┘
```

## Acceptance criteria

- The card does not fail silently.
- The faulty key or entity id is visible where possible.
- Runtime service errors do not corrupt displayed state.
- Controls are disabled when no safe service call can be made.
