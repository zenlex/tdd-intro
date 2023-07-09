# INTRO
## Personal Background
- Name: Erich Keil (aka zenlex)
- Position: Full Stack Software Developer
- Previous Life: Lighting & Sound Designer and Production Manager
## Session Overview
- [Basic Concepts of Automated Testing](#basic-concepts-of-automated-testing)
- [An Overview of Test Driven Development](#tdd-overview)
- [Personal Pragmatic Workflows for 'TDD-ish'](#personal-pragmatic-flows-for-tdd-ish)
- [Code Along / Practice](#code-along--workshop)
5min

# BASIC CONCEPTS OF AUTOMATED TESTING
- What is an automated test? 
- Types of Tests:
	- End to End (E2E) / Browser
	- Integration / Feature 
	- Component (React, Vue, etc.)
	- Unit
- Categories / Examples of tools involved (test runner/framework, assertion library, logging/reporting)
	- Language specfic examples:
		- Browser/E2E - cypress, playwright, pupetteer, dusk
		- Component Tools/Libraries - Testing Library, test-utils, Detox, etc.
		- JS/TS - jest, vitest, jasmine, mocha, karma, chai
		- Rust - cargo test
		- Python - unittest, pytest
		- C# - MSTest, NUnit, xUnit.NET
		- PHP - PHPUnit, Pest
		- ...
20min

# TDD OVERVIEW
- Basic ideas:
	- Write tests before code
	- Use the test structure to help specify requirements and architecture
	- Keep changes small and incremental and test after each change
	- 'Red, Green, Refactor' loop
	- Maintain the test code in tandem with the project code
15min

# PERSONAL PRAGMATIC FLOWS FOR TDD-ISH
- The todo list / outside in approach:
	- Map out feature flow (flow chart, sketch pad, pseudocode, etc.)
	- Write core functionality test for each stage in flow
	- Start with the most outer layer/broadest integration
	- Failing test at one layer of application drives you down a layer to write a new test(s) for the underlying requirmement the outer layer depends on
	- Eventually this should lead down to unit tests or simple integration tests that will be passable with small code changes
	- Satisfying the lower level tests should start to pass the outer layer tests like layers of an onion
	- Start each work session by running the test suite or some subset of it and then start addressing the failing tests. 
	- Serves as a tool for breaking down larger problems to smaller pieces, adding specificity to requirements, identifying potential ambiguity that needs addressing, and does so while providing a tangible asset - a test suite that can continue to validate this functionality rapidly and repeatedly. We do this work anyway on some level, doing it this way adds value. 
- The Regression Test / Legacy Code
	- When time/skill allows, writing core functionality tests against a new-to-you codebase that doesn't have them adds value to the codebase while also validiting/improving your understanding of core functionality
	- Putting tests in place before fixing bugs or refactoring features increases confidence for more aggressive refactors that keep the codebase clean, maintainable, and efficient, and leaves tests in place for bugfixes to 
		check for new bugs introduced by the fix and to validate that the conditions originally trigerring the bug do not reoccur/retrigger the bug
- Project mindset:
	- It should be easy within a codebase to write and run tests, ideally with a watch mode option
	- Failing tests should not be allowed to persist or be committed - fix them, mark them as skipped with documentation as to why, or delete them. Noisy test output greatly hinders the usefulness.
20min

# CODE-ALONG / WORKSHOP
- Option A - add tests to existing app (could use the Nightmoves CRUD app I wrote for shopify)
- Option B - build a todo list in TDD style with Vue + json-server, then swap in express + db for json-server
60min
