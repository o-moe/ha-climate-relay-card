# Codex Bootstrap Prompt

Use this prompt only after the product direction, target screens, configuration model, and quality gates have been reviewed.

```text
You are working on a new Home Assistant HACS dashboard/plugin Custom Card repository.

Repository goal:
Create a high-quality room-first heating Custom Card for Home Assistant.

Strategic context:
The previous backend integration approach is frozen. The Custom Card is the leading product artifact. Do not create or depend on a backend integration unless explicitly instructed later.

Strict constraints:
- No manufacturer app clone.
- No copied brand names, logos, proprietary wording, exact layout, or trade dress.
- No hidden browser-side rule engine.
- No schedule evaluation in the frontend.
- No cross-room orchestration in the first implementation.
- All source code, comments, filenames, tests, and documentation must be written in English.
- Use TypeScript strict mode.
- Use Lit for the Custom Card implementation.
- Build a HACS-compatible dashboard/plugin repository.

Initial card scope:
The card controls one room per card instance using existing Home Assistant entities:
- Required: climate_entity
- Optional: humidity_entity
- Optional: window_entity

Primary UX:
- Room-first.
- Temperature-first.
- Clear heating, idle, off, window-open, unavailable, and unknown states.
- Minimal daily-use controls.
- Native Home Assistant semantics.

Required first implementation deliverables:
1. Repository skeleton.
2. HACS metadata file.
3. TypeScript/Lit source structure.
4. Vite build setup.
5. Vitest test setup.
6. ESLint and Prettier setup.
7. GitHub Actions CI.
8. Documentation skeleton preservation.
9. Minimal Custom Card registration.

Quality gates:
- Type check.
- Lint.
- Format check.
- Unit tests.
- Production build.
- Verify dist artifact exists.

Implementation rules:
- Keep config validation separate from rendering.
- Keep Home Assistant state extraction separate from rendering.
- Keep service orchestration separate from rendering.
- Do not use Home Assistant private internal DOM structure.
- Do not implement schedules.
- Do not implement backend communication.
- Do not implement cross-room logic.

Testing requirements:
Tests must cover at least:
- Configuration validation.
- State extraction.
- Rendering states.
- Service orchestration.

Before writing code, inspect the repository. Preserve existing documentation and architectural intent. Avoid unrelated rewrites.
```
