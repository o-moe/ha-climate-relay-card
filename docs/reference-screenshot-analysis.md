# Reference Screenshot Analysis

## Purpose

This document captures design observations from the project reference screenshots.

The screenshots are used as directional UX references only. The card must not copy manufacturer-specific trade dress, exact layout, exact colors, icons, wording, animations, or proprietary interaction patterns.

## Relevant UX principles observed

### 1. Strong semantic background state

The reference uses the whole room tile background as the dominant state cue:

- Warm yellow/orange for actively heating rooms.
- Green for active thermostats that are currently not heating.
- Gray for off or frost-protection-like states.

This is a useful general UX pattern and is adopted as a semantic state model, not as an exact color copy.

### 2. Large current temperature

The current room temperature is visually dominant. This supports a glance-first heating dashboard.

Adopted principle:

- Current temperature is the largest value on the compact card.

### 3. Room name below or near the current temperature

The reference keeps room identity close to the main temperature value.

Adopted principle:

- Area or room name is visually tied to the temperature block.

### 4. Humidity as secondary chip

Humidity appears as a small secondary indicator. It is useful but not dominant.

Adopted principle:

- Humidity is optional and visually secondary.

### 5. Target temperature as explanatory status text

The reference communicates the target temperature as natural status text such as heating toward or set to a target.

Adopted principle:

- Target temperature should be visible as state-supporting text, not necessarily as a primary control on the first view.

### 6. No direct +/- controls on room overview tiles

The reference overview tiles are glance surfaces and do not show direct plus/minus controls.

Adopted principle:

- The compact card does not render direct target-temperature controls.
- Adjustment is entered by clicking or tapping the card.

## Deliberately not copied

The implementation must not copy:

- Exact brand color values.
- Exact typography.
- Exact spacing and tile proportions.
- Exact icon style.
- Exact wording.
- Exact schedule screen layout.
- Exact thermostat control illustration.
- Exact navigation structure.

## Product interpretation for this repository

The target design direction is:

- Area-first for Home Assistant terminology.
- Room-first in user perception.
- Temperature-first in visual hierarchy.
- Semantic background states.
- Compact overview without direct controls.
- Click/tap to enter adjustment.
- Native Home Assistant more-info as the first interaction target unless a custom detail surface is justified later.
