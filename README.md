# UX Scenario Agent — Complete Starter

A Vue 3 + TypeScript frontend and Node.js + TypeScript backend for the UX Scenario Agent.

## What is included
- PRD upload or paste (`.md`, `.txt`)
- Select one, several, or all six UX perspectives
- Codex SDK integration for Approach 2 analysis
- Streaming analysis progress via Server-Sent Events
- Scenario extraction and stage planning
- Wireframe image generation integration (optional OpenAI API key) with a local placeholder fallback
- Scenario detail and wireframe gallery UI
- Local JSON persistence; PostgreSQL can be added later on the server
- HTML report composition
- Individual perspective re-run endpoint
- History
- Docker files included for server deployment, but Docker is NOT required locally

## Local requirements
- Node.js 18+
- npm
- Codex CLI/authentication for the Codex SDK path
- Docker is optional

## Start locally

### Backend
```bash
cd backend
copy .env.example .env        # Windows
# cp .env.example .env        # macOS/Linux
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:8787

## Authentication
The Codex TypeScript SDK wraps the Codex CLI and requires a working Codex CLI authentication/configuration. See the official SDK README:
https://github.com/openai/codex/blob/main/sdk/typescript/README.md

For wireframe image generation, set `OPENAI_API_KEY` on the backend if you want real images. Without it, the app creates SVG placeholder wireframes so the complete flow remains testable.

## Architecture
```text
PRD
 ↓
Approach 2 Codex Agent
 ↓
UX analysis + scenarios
 ↓
Scenario Planner
 ↓
Wireframe specifications
 ↓
Image Generation Service
 ↓
Scenario Detail / Gallery
 ↓
HTML Report Composer
 ↓
Final HTML
 ↓
Existing HTML → Figma workflow
```

## Docker
`docker-compose.yml` is provided for later server deployment. You do not need Docker on your development PC.
