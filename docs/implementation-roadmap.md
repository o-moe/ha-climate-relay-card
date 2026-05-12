# Implementation Roadmap

## Phase 0 — Product definition

### Deliverables

- Product direction
- UX principles
- Target screens
- Acceptance criteria
- Configuration model
- Repository strategy

### Exit criteria

- No unresolved disagreement about first-scope behavior.
- No backend dependency in the initial scope.
- No implementation starts before target screens and acceptance criteria exist.

## Phase 1 — Static mockups

### Deliverables

- Compact card mockup
- Expanded card mockup
- Error state mockup
- Loading state mockup
- Window-open state specification
- Visual token draft

### Exit criteria

- Layout and visual hierarchy are accepted before production code.
- Mockups cover normal, degraded, and invalid states.

## Phase 2 — Repository bootstrap

### Deliverables

- HACS-compatible repository skeleton
- TypeScript/Lit/Vite/Vitest setup
- ESLint and Prettier setup
- GitHub Actions CI
- Documentation skeleton

### Exit criteria

- Minimal card registers in Home Assistant.
- Build and quality gates pass.
- No product behavior beyond registration exists yet.

## Phase 3 — Core card behavior

### Deliverables

- Config validation
- Home Assistant state extraction
- Compact rendering
- Temperature adjustment service calls
- Error and loading states

### Exit criteria

- Unit tests cover core behavior.
- Manual test in Home Assistant succeeds.
- No hidden rule engine exists.

## Phase 4 — UX refinement

### Deliverables

- Expanded layout
- Theme handling
- State visuals
- Accessibility review
- Documentation examples

### Exit criteria

- UI meets acceptance criteria on mobile and desktop.
- State is not communicated by color alone.
- Service behavior remains explicit and predictable.

## Phase 5 — Public alpha

### Deliverables

- Versioned release
- Built dist artifact
- HACS installation instructions
- Changelog
- Known limitations

### Exit criteria

- Installable via HACS custom repository.
- No critical usability or safety defects are known.
- The README clearly states supported and unsupported behavior.
