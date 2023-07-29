# An Intro to Automated Testing and TDD

Material for a talk/workshop on the basics of Automated Testing and TDD. 

Target Audience: Devs with some programming knowledge but little to no experience with writing tests. 

## Contents:
- [Slide Deck --WIP--](https://docs.google.com/presentation/d/1Nl1GDpnnU3cIRt3uGAt7joJb5MPdyMoSirep9zRudFk/edit?usp=sharing)

- App example in `tdd-intro-app` subdirectory is a starter Vue + Vite + TS app stripped out and with `vitest` and `@testing-libarary/vue`and `playwright` added on.

- There is another README.md inside the `tdd-intro-app` folder that contains recommended settings for VSCode for Vite + Vue + TS

- [Starter Flow Diagrams](https://drive.google.com/file/d/1HTxQ2HKN4mX4pS74HaPQ8r_LvDOXRAPY/view?usp=sharing)
## Usage:
- `cd tdd-intro-app && npm install && npm run dev` should install the `node_modules` and start a vite dev server at `localhost:5173` by default. Hot Module Reloading is setup so you can start by writing tests ending in `.spec.js` or `.test.js`  (or `.ts` for TypeScript test files)

- Vitest (unit/component tests) will ignore flies in `tests/e2e/**`. Playwright will run e2e tests in that folder/subfolders. 

### Scripts:
- `npm run dev` launch Vite dev server for local development with Hot Module Reloading
- `npm run build` run production build to minify and bundle assets with Vite
- `npm run preview` run production build locally 
- `npm test` run Vitest unit and component tests
- `npm run test:e2e` run Playwright e2e tests
- `npm run test:ui` run Vitest coverage with UI for time travel and reporting
- `npm run test:e2eui` run Playwright tests with UI for time travel and reporting
