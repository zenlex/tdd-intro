# An Intro to Automated Testing and TDD

Material for a talk/workshop on the basics of Automated Testing and TDD. 

Target Audience: Devs with some programming knowledge but little to no experience with writing tests. 

## Contents:
- [Slide Deck --WIP--](https://docs.google.com/presentation/d/1Nl1GDpnnU3cIRt3uGAt7joJb5MPdyMoSirep9zRudFk/edit?usp=sharing)

- App example in `tdd-intro-app` subdirectory is a starter Vue + Vite + TS app stripped out and with `vitest` and `@testing-libarary/vue` added on.

## Usage:
- `cd tdd-intro-app && npm install && npm run dev` should install the `node_modules` and start a vite dev server at `localhost:5173` by default. Hot Module Reloading is setup so you can start by writing tests ending in `.spec.js` or `.test.js`  (or `.ts` for TypeScript test files)
