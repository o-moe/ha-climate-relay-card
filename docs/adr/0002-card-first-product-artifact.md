# ADR 0002: Custom Card as Leading Product Artifact

## Status

Accepted

## Context

The product goal is a high-quality room-first heating user experience for Home Assistant.

Home Assistant already provides climate entities, sensor entities, binary sensors, and service calls that can support the first version without a custom backend.

## Decision

The Home Assistant Custom Card is the leading product artifact.

The first repository focuses on a HACS-compatible dashboard/plugin Custom Card.

## Consequences

- Product decisions start from target screens and acceptance criteria.
- The first implementation uses existing Home Assistant entities.
- The card controls one room per instance.
- The card must remain explicit about service calls and must not hide automation logic in the browser.
- Repository quality gates must be defined before production implementation.

## Deferred decisions

- Custom backend integration
- Cross-room orchestration
- Schedule handling
- Custom detail panel
- Dashboard strategy generation
