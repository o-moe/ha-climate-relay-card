# Quality Gates

## Mandatory local gates

The implementation repository must support these checks:

```text
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run build
```

## Mandatory CI gates

The CI workflow must execute:

1. Install dependencies from the lock file.
2. Run TypeScript type checking.
3. Run ESLint.
4. Run Prettier check.
5. Run unit tests.
6. Run production build.
7. Verify the distribution artifact exists.
8. Verify `hacs.json` exists and is valid JSON.

## Test coverage areas

### Configuration validation

Required tests:

- Missing `climate_entity` fails clearly.
- Invalid climate entity id fails clearly.
- Optional entities are accepted when omitted.
- Unsupported layout values fail clearly.
- Invalid `step_size` values fail clearly.

### State extraction

Required tests:

- Current temperature extraction.
- Target temperature extraction.
- HVAC action/state mapping.
- Humidity extraction.
- Window state extraction.
- Unknown and unavailable handling.
- Missing optional entities.

### Rendering

Required tests:

- Compact layout renders required content.
- Expanded layout renders additional content.
- Error state renders an actionable message.
- Loading state does not show misleading values.
- Optional indicators are conditionally rendered.

### Service orchestration

Required tests:

- Increase target temperature calls `climate.set_temperature` with the expected payload.
- Decrease target temperature calls `climate.set_temperature` with the expected payload.
- Target temperature is clamped to supported min/max values when available.
- Service errors are surfaced.
- No service call happens when the entity is unavailable.

### Accessibility

Required tests or review checks:

- Buttons have accessible labels.
- Keyboard activation works.
- Temperature values include units.
- State is not communicated by color alone.

## Definition of Done for first public alpha

- The card works with at least one real Home Assistant climate entity.
- HACS can install the repository as a dashboard/plugin repository.
- README includes minimal and recommended YAML examples.
- All quality gates pass in CI.
- Mockups and target screens are committed.
- Known limitations are explicitly documented.

## Rejected shortcuts

The following shortcuts are not acceptable:

- Shipping without tests.
- Shipping without strict TypeScript.
- Mutating Home Assistant state outside explicit service calls.
- Implementing hidden browser-side heating rules.
- Treating visual polish as optional.
