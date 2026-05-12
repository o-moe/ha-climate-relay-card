# Product Direction

## Strategic decision

The previous backend integration approach is frozen. The Custom Card is the leading product artifact.

The repository focuses on a Home Assistant HACS dashboard/plugin Custom Card for a high-quality room-first heating user experience.

## Product thesis

Heating control in Home Assistant should start from the room, not from the device.

The user should immediately understand:

1. Which room is being controlled.
2. What the current temperature is.
3. What the target temperature is.
4. Whether the room is heating, idle, off, unavailable, or affected by an open window.
5. Which minimal action is safe and obvious.

## Initial value proposition

The card improves daily heating interaction without requiring a custom backend integration.

The first version works directly with existing Home Assistant entities:

- Required: `climate_entity`
- Optional: `humidity_entity`
- Optional: `window_entity`

## Product stance

The card is not a thermostat backend and not a schedule engine.

It is a high-quality presentation and interaction layer over existing Home Assistant state and services.

## Primary workflows

### Daily glance

The user checks the dashboard and sees per room:

- Current temperature
- Target temperature
- Heating state
- Optional humidity
- Optional window state

### Quick adjustment

The user changes the target temperature with minimal friction.

### State explanation

The user sees why heating is not active, for example because a window is open or the climate entity is unavailable.

### Detail inspection

The user opens the native Home Assistant more-info dialog for secondary information and less frequent actions.

## Product boundaries for v1

The first version controls one room per card instance.

The following behavior is intentionally out of scope:

- Cross-room orchestration
- Frontend schedule evaluation
- Presence logic
- Vacation mode
- Window-open automation rules
- Backend communication
- Custom dashboard generation

## Success criteria

The first public alpha is successful when:

- The card works with at least one real Home Assistant climate entity.
- The dashboard surface is room-first and temperature-first.
- The card is installable as a HACS dashboard/plugin repository.
- The codebase has strict TypeScript, linting, formatting, tests, and CI gates.
- Known limitations are documented instead of hidden.
