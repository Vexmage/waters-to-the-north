# Waters to the North

A narrative survival card game built in React using Vite. Players lead their community northward through shifting seasons, drawing cards to reveal tasks, blessings, and spirits from legend such as the Medicine Keeper, Mishepeshu, the Thunderer, and Nanabozho. Each draw advances the story — or invites disaster.

## 🔧 Tech Stack

- **React**
- **Vite**
- **JavaScript**
- Modular component structure with game logic in `/logic`
- State management via React hooks

## 🃏 Game Summary

- Draw from a shuffled deck of standard playing cards (plus jokers).
- Card types include:
  - **Task Cards** (2–10): Season-based challenges affecting morale and progress.
  - **Face Cards**:
    - Jack: **Mishepeshu** (danger)
    - Queen: **Medicine Keeper** (healing/guidance)
    - King: **Thunderer** (protection)
    - Joker: **Nanabozho** (chaos and tricks)

- Resources tracked:
  - 🧍 People
  - 💙 Morale
  - 🛤️ Progress
  - 🪙 Copper
  - 🛡️ Shield (from Thunderer)

## 📁 Project Structure

- `/src/components` – React UI components
- `/src/logic` – Game rules, card effects, and event resolution
- `/src/data` – Initial deck definitions
- `/src/styles` – CSS styles

## 🛠 React + Vite Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- `@vitejs/plugin-react` uses Babel for Fast Refresh
- `@vitejs/plugin-react-swc` uses SWC for Fast Refresh

### Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for how to integrate `typescript` and `typescript-eslint` in your project.

## 📦 Setup

```bash
npm install
npm run dev
