# Card Configuration Model

## Minimal configuration

```yaml
type: custom:ha-climate-relay-card
name: Living Room
climate_entity: climate.living_room
```

## Recommended configuration

```yaml
type: custom:ha-climate-relay-card
name: Living Room
climate_entity: climate.living_room
humidity_entity: sensor.living_room_humidity
window_entity: binary_sensor.living_room_window
```

## Extended configuration draft

```yaml
type: custom:ha-climate-relay-card
name: Living Room
climate_entity: climate.living_room
humidity_entity: sensor.living_room_humidity
window_entity: binary_sensor.living_room_window
layout: compact
step_size: 0.5
show_humidity: true
show_window: true
show_state_text: true
```

## Fields

| Field | Required | Type | Default | Purpose |
|---|---:|---|---|---|
| `type` | yes | string | none | Home Assistant custom card type. |
| `name` | no | string | entity friendly name | User-facing room name. |
| `climate_entity` | yes | entity id | none | Climate entity for the room. |
| `humidity_entity` | no | entity id | none | Humidity sensor entity. |
| `window_entity` | no | entity id | none | Window/contact sensor entity. |
| `layout` | no | `compact` / `expanded` | `compact` | Visual density. |
| `step_size` | no | number | climate attribute or `0.5` | Target temperature increment. |
| `show_humidity` | no | boolean | auto | Whether humidity is displayed. |
| `show_window` | no | boolean | auto | Whether window state is displayed. |
| `show_state_text` | no | boolean | `true` | Whether state text is displayed. |

## Validation rules

- `climate_entity` is mandatory.
- `climate_entity` must reference an entity id in the `climate` domain.
- `humidity_entity`, when present, must reference an entity id.
- `window_entity`, when present, must reference an entity id.
- `layout`, when present, must be either `compact` or `expanded`.
- `step_size`, when present, must be a finite positive number.
- Boolean display options must be booleans when present.

## Runtime interpretation

### Temperature values

The card should derive values from the configured climate entity:

- Current temperature from `current_temperature`
- Target temperature from `temperature` or the relevant climate target attribute exposed by Home Assistant
- Temperature unit from Home Assistant unit system or entity attributes

### Temperature step

The effective step size should be resolved in this order:

1. Explicit `step_size` from card configuration
2. Entity-provided target temperature step if available
3. Fallback value `0.5`

### Window state

A configured `window_entity` is display-only in v1.

The card must not automatically modify HVAC mode, target temperature, or schedule state when the window is open.

## Deferred configuration

The following options are intentionally deferred:

- Schedule model
- Cross-room grouping
- Vacation mode
- Presence logic
- Window-open automation rules
- Backend integration options
- Frontend-side computed heating plan
