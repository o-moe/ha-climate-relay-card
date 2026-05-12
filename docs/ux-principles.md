# UX Principles

## 1. Room-first

The room name is the primary label. Entity names are implementation details and must not dominate the UI.

## 2. Temperature-first

Current room temperature and target temperature are the most important data points.

## 3. Daily-use minimalism

The default card surface must expose only controls that are used frequently:

- Increase target temperature
- Decrease target temperature
- Open details

Secondary controls must not clutter the default surface.

## 4. Explain state instead of exposing raw entity complexity

The card translates Home Assistant state into user-facing heating states:

- Heating
- Idle
- Off
- Window open
- Unavailable
- Unknown

## 5. Use semantic card background colors

The card background color is a primary state cue.

The first visual state model uses these semantics:

| Background | Meaning |
|---|---|
| Yellow | The room is actively heating. |
| Green | The thermostat is active but currently not heating. |
| Gray | The thermostat is off, in frost protection, unavailable, or otherwise not actively controlling comfort temperature. |

The exact color tokens must be theme-aware and must not copy manufacturer-specific colors or trade dress.

State color must always be paired with visible state text. The UI must not communicate state by color alone.

## 6. Respect Home Assistant semantics

The card must call standard Home Assistant services. It must not create hidden frontend state that conflicts with Home Assistant.

## 7. Fail visibly and safely

Invalid configuration, missing entities, unsupported climate modes, unavailable entities, and failed service calls must produce explicit feedback.

## 8. Responsive by default

The card must work on mobile-first dashboard layouts and scale cleanly to tablet and desktop grid layouts.

## 9. Theme-aware visual design

The card must respect Home Assistant theme variables where practical and must not depend on an external theme.

## 10. Accessibility is not optional

The UI must not communicate state by color alone.

Required accessibility properties:

- Controls have accessible labels.
- Temperature values include units.
- State text exists when color is used as a state cue.
- Keyboard activation works for interactive controls.

## 11. No manufacturer trade dress

The card may use general UX patterns such as:

- Large temperature display
- Compact room tiles
- State color
- Minimal controls
- Separate detail flows

The card must not copy manufacturer-specific layouts, wording, iconography, animations, visual identity, or interaction models.
