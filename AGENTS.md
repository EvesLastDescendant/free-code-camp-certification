# AGENTS.md — Guide for AI coding agents

Checklist
- [ ] Understand project scope: small collection of FreeCodeCamp JS solutions (single-file scripts).
- [ ] Preserve runtime side-effects (example calls at file bottoms) or explicitly guard them when exporting.
- [ ] Use Node (CommonJS) style when adding exports; keep diffs small.
- [ ] Run and smoke-test changed files with `node` and `node --inspect-brk`.

What this project is
- This repository is a set of isolated JavaScript solution scripts (FreeCodeCamp-style). Each file implements one function and often contains a demo invocation or console.log at the bottom.
- Files of interest (representative):
  - `chunky-monkey-algorithm.js` — function `chunkArrayInGroups(arr, num)` with demo call `chunkArrayInGroups(["a","b","c","d"], 2)`.
  - `factorial-calculator.js` — `factorialCalculator(n)` with `console.log` of the result.
  - `longest-word-finder.js` — `findLongestWordLength(str)` and `console.log(...)` demo.
  - `mutations-algorithm.js` — `mutation(arr)` (case-insensitive contains check).
  - `profile-lookup.js` — `lookUpProfile(name, prop)` operates on an in-file `contacts` array.
  - `string-repetition.js` — `repeatStringNumTimes(str, num)` and demo `console.log(...)`.

Key patterns and conventions (project-specific)
- File-per-solution: each JavaScript file contains exactly one main function and a small demo invocation or console output at the bottom. Treat files as scripts rather than libraries by default.
- Naming: filenames use kebab-case; exported/defined functions use camelCase.
- Style: ES6+ features are used (const, let, spread operator, template strings) but files are plain CommonJS-style runnable scripts (no package.json or module bundler present).
- Side-effect calls: many files include example calls or `console.log` at top-level. This means importing a file will execute its demo. When modifying or converting to modules, guard those demo invocations with:

  if (typeof require !== 'undefined' && require.main === module) {
    // demo / console.log calls
  }

  This preserves behavior when the file is executed directly but avoids side effects when imported.

Integration & external dependencies
- There is no package.json and no external dependencies. Node.js is the expected runtime.
- There are no network calls, build systems, or test harnesses present. Treat changes as local modifications to small scripts.

Developer workflows (how to run and debug)
- Run a single file: node <file>
  - Example: node factorial-calculator.js
- Run all JS scripts quickly (smoke test):
  - bash: for f in *.js; do node "$f"; done
- Debug with inspector:
  - node --inspect-brk <file> and attach an inspector (Chrome/VS Code).
- When adding unit-style usage, prefer adding `module.exports = { functionName }` and protect demo code with the `require.main === module` guard.

Editing guidelines for AI agents
- Minimize diffs. These are small teaching/example snippets — prefer minimal, reversible edits.
- Preserve function signatures. External graders or tests (not in repo) may expect exact function names and arities.
- If you need to export functions for testing, do two things together in the same commit:
  1) Add `module.exports` for the function at the bottom of the file.
  2) Wrap demo invocations in a `require.main === module` guard (see example above).

Examples
- To export `findLongestWordLength` safely, change the bottom of `longest-word-finder.js` to:

  if (require.main === module) {
    console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
  } else {
    module.exports = { findLongestWordLength };
  }

- If you add tests or a test runner, include a `package.json` and keep script names short (`test`, `lint`). This repo currently has no such files — mention any additions in a PR description.

When to ask for human review
- Structural changes (introducing package.json, converting to ES modules, adding a test runner) — get human approval.
- Any changes that alter function names, parameter lists, or the visible output of demo calls.

Files to inspect when making changes
- All top-level `*.js` files in the repo — they all follow similar patterns and may need the same `require.main` guard when converted to modules.

Why these rules
- The repo is a collection of runnable examples: agents should avoid breaking the runnable script behavior while enabling importability for tests.
- There are no centralized tests/builds, so conventions are lightweight and must be preserved to avoid surprising behavior.

If no existing agent instructions are present
- No .github/copilot-instructions.md, AGENT.md, or AGENTS.md were found in the repo root or subfolders. Create PRs with clear descriptions whenever you add repository-level automation (tests, CI).

Contact / PR guidance
- Keep each PR focused: one file change per problem fix or feature. Provide a short description explaining why sample invocation was guarded or why exports were added.

---
Generated by an automated analysis of the repository structure and files. Follow the guard-and-export pattern when making code importable, and run smoke tests with `node` after edits.
