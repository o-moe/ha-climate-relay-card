# Auto Mode Configuration

## Purpose

This document defines the product and UX decisions for configuring `Auto` mode in the Area Heating Card.

It describes the intended user-facing model and the normalized data concept. It does not prescribe the final implementation technology.

## Core decision

`Auto` is the scheduled target-temperature provider for an area.

`Auto` answers exactly one product question:

```text
Which target temperature should this area use now if no higher-priority override is active?
```

`Auto` is intentionally narrower than a full heating policy engine.

## Conceptual separation

The product separates three concepts:

| Concept | Meaning |
|---|---|
| Auto target source | Supplies the planned target temperature for an area. |
| Override | Temporarily supersedes the Auto target or any manual end state. |
| Effective target | The target temperature currently applied after all priorities are resolved. |

## Priority model

The UX assumes the following priority model:

| Priority | Source | Product meaning |
|---:|---|---|
| 1 | Safety / frost protection | Protective behavior, if required by the final implementation. |
| 2 | Window override | A configured open-window override supersedes all user-facing temperature modes. |
| 3 | Away override | A configured away override supersedes all user-facing temperature modes. |
| 4 | Manual / Next / Time | User-selected manual target-temperature behavior. |
| 5 | Auto | Scheduled target temperature for the area. |
| 6 | Fallback | Safe default if no valid target can be resolved. |

Window and Away behavior are not part of Auto configuration.

They are independent override layers that can override Auto, Manual, Next, and Time.

## Auto source levels

The product UX supports three Auto source levels:

```text
Every day | Workday | External
```

### Every day

A simple same-every-day time/temperature schedule.

Example:

```text
Every day
06:00  21.0°
22:00  18.0°
```

This is the lowest-friction configuration mode and should be sufficient for many rooms.

### Workday

Separate schedules for workdays and non-workdays.

Example:

```text
Workday
06:00  21.0°
08:00  18.0°
16:00  21.0°
22:00  18.0°

Non-workday
08:00  21.0°
23:00  18.0°
```

The Workday source level depends on an external workday context source.

The product UX should not require users to model holidays, public holidays, or weekday logic manually inside each room schedule.

### External

A user-provided or integration-provided Home Assistant entity supplies the Auto target.

This mode is intended for advanced users or external systems.

Example:

```text
External source
sensor.living_room_auto_target
```

External sources may be backed by Home Assistant schedules, calendars, template sensors, Node-RED, third-party scheduler integrations, or a future backend integration.

## Graphical configuration UX

The default configuration path for simple Auto sources must be graphical, not YAML-first.

The product UX should provide a visual Auto editor with these top-level choices:

```text
Every day | Workday | External
```

### Every day editor

The `Every day` editor presents one list of time/temperature rows.

Example UI:

```text
Auto source
[Every day] [Workday] [External]

Every day
06:00    21.0°
22:00    18.0°

[Add time]
```

### Workday editor

The `Workday` editor presents a workday context entity and two separate schedules.

Example UI:

```text
Auto source
[Every day] [Workday] [External]

Workday entity
binary_sensor.workday

Workday
06:00    21.0°
08:00    18.0°
16:00    21.0°
22:00    18.0°

Non-workday
08:00    21.0°
23:00    18.0°
```

### External editor

The `External` editor presents entity selectors for a normalized Auto target source.

Example UI:

```text
Auto source
[Every day] [Workday] [External]

Target entity
sensor.living_room_auto_target

Next target
sensor.living_room_next_target

Next change
sensor.living_room_next_change

Context label
sensor.living_room_auto_context
```

YAML remains supported as an advanced and reviewable configuration format, but it must not be the only path for simple Auto setup.

## Editor entry point

The interaction surface should provide a secondary action to open the Auto editor.

Current UX label:

```text
Edit Auto
```

Recommended placement:

```text
Living Room                         [Edit Auto]
Heating
```

Rationale:

- The room name remains the primary heading.
- The thermostat state remains visible as secondary information.
- The Auto editor is discoverable without competing with daily target-temperature controls.
- The label ties directly to the `Auto` end state and avoids implying that Away, Window, Manual, Next, or Time rules are configured there.

## Home Assistant custom-card editor capability

Home Assistant supports graphical custom-card editors through a custom element returned by `getConfigElement()`.

Home Assistant displays that editor in the dashboard card editor and receives changes through the `config-changed` event.

For simpler configuration needs, Home Assistant also supports a built-in form editor through `getConfigForm()`.

Product implication:

```text
The Area Heating Card should target a custom graphical editor for the Auto schedule UX, because time/temperature row editing is richer than a simple static form.
```

## Normalized Auto target model

All Auto source levels should converge into the same normalized Auto target model.

Minimum required value:

```text
current_auto_target_temperature
```

Optional values:

```text
next_auto_target_temperature
next_auto_change_time
auto_source_label
auto_context_label
```

The card should not need completely different display logic for Every day, Workday, and External sources.

## Product architecture decision

The UI may provide a convenient schedule editor for simple Auto configurations.

However, the card must not execute schedules in the browser.

The intended product direction is:

```text
User-facing Auto schedule GUI
        ↓
Persistent Home Assistant / integration / blueprint data
        ↓
Normalized Auto target source per area
        ↓
Area Heating Card display and interaction
```

In other words, the schedule editor is an input UX, not a browser-side rule engine.

## Relationship to Home Assistant Schedule

Home Assistant Schedule is a suitable building block for simple weekly time blocks.

A Schedule entity can hold time blocks and Additional Data attributes while a block is active. That makes it a plausible persistence or execution substrate for simple Auto target temperatures.

However, the product should not expose raw Home Assistant Schedule mechanics as the primary user experience.

The Area Heating Card should show heating-specific concepts:

```text
Every day
Workday
External
Target temperature
Next change
```

not generic automation concepts.

## Relationship to Home Assistant Workday

Home Assistant Workday is a suitable context provider for the Workday Auto source level.

The Area Heating Card should not recreate holiday/workday calculation logic in the frontend.

If Workday mode is used, the user experience should rely on a configured Workday context source or a later integration-provided equivalent.

## Relationship to Home Assistant Calendar

Calendars are useful for advanced Auto target sources and automation context.

Vacation, holidays, guest mode, or special calendar events should not be modeled directly in the basic Every day or Workday schedule editor.

Users who need those semantics should use External mode or a future advanced Auto source provider.

## Relationship to Climate entities

The configured climate entity remains the physical or logical thermostat endpoint for the area.

The Auto source decides the scheduled target temperature. It does not replace the climate entity.

The final implementation must decide how and when resolved target temperatures are applied to the climate entity.

## UX implications

### Compact card

The compact card should expose only a coarse end-state indicator:

```text
Auto | Manual
```

This tells the user whether the area is schedule-driven or manually overridden.

It does not expose Every day, Workday, External, Next, or Time details.

### Interaction surface

The interaction surface may show Auto source information when Auto is active.

Examples:

```text
Auto · Every day
Next 18.0° at 22:00
```

```text
Auto · Workday
Next 18.0° at 22:00
```

```text
Auto · External
Target 21.0°
```

If next-change metadata is unavailable, the UI should degrade gracefully:

```text
Auto · External
Next change unavailable
```

### Configuration surface

The configuration UX should offer three source choices:

```text
Every day
Workday
External
```

The first two are simple schedule editors. The third is an escape hatch for advanced Home Assistant users.

## Out of scope for the card frontend

The card frontend must not:

- Evaluate time schedules in the browser.
- Run recurring timers to update Auto targets.
- Reimplement Workday, holiday, calendar, or vacation logic.
- Resolve Away and Window overrides as part of Auto source calculation.
- Store authoritative heating schedules only in dashboard configuration.

## Open implementation questions

The following topics are intentionally deferred:

- Whether Every day / Workday schedules are persisted as Home Assistant Schedule helpers, integration storage, generated helpers, or backend entities.
- Whether a future backend integration creates normalized Auto target entities.
- Whether External mode requires a single target-temperature entity or supports optional next-target and context entities.
- How generated schedules are edited from the card editor.
- How the final resolved effective target is applied to the configured climate entity.

## Acceptance criteria

- Auto is documented as the scheduled target-temperature provider, not as a full heating policy engine.
- Window and Away are documented as independent higher-priority overrides.
- The UX supports Every day, Workday, and External Auto source levels.
- Every day provides the lowest-friction simple schedule configuration.
- Workday provides separate workday and non-workday schedule configuration.
- External allows advanced users to provide a Home Assistant entity or integration-generated source.
- Simple Auto source setup is available through a graphical UX, not only YAML.
- The interaction surface provides an `Edit Auto` entry point.
- All Auto source levels map to a normalized Auto target model.
- The card frontend is not responsible for schedule execution.
- Calendar and vacation-style logic are treated as advanced external-source concerns unless explicitly designed later.
