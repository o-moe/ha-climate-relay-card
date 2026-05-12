# ADR 0001: Freeze Backend Integration Approach

## Status

Accepted

## Context

The previous project direction explored backend integration concepts for heating control.

That approach created a risk that backend architecture would drive the product direction before the target user experience was sufficiently clear.

## Decision

The backend integration approach is frozen.

No new backend behavior should be designed or implemented until a concrete UI flow requires it.

## Consequences

- The Custom Card becomes the leading product artifact.
- Initial behavior must work directly with existing Home Assistant entities.
- Backend communication is out of scope for the first implementation phase.
- Backend support may be reconsidered only when a specific UX requirement cannot be solved cleanly with existing Home Assistant entities and services.

## Non-goals

- This decision does not delete or invalidate previous backend experiments.
- This decision does not forbid future backend work.
- This decision prevents backend-first architecture decisions during the card-first phase.
