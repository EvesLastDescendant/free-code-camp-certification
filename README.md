# free-code-camp-certification — Mini collection of FreeCodeCamp JS solutions

Short overview
- This repository is a small collection of single-file JavaScript solutions (FreeCodeCamp-style). Each top-level `*.js` file implements one function and often includes a demo invocation or `console.log` at the bottom.

Files of interest (examples)
- `chunky-monkey-algorithm.js` — `chunkArrayInGroups(arr, num)` (demo call at bottom).
- `factorial-calculator.js` — `factorialCalculator(n)` (prints result via `console.log`).
- `longest-word-finder.js` — `findLongestWordLength(str)` (prints demo result).
- `mutations-algorithm.js` — `mutation(arr)` (case-insensitive membership check).
- `profile-lookup.js` — `lookUpProfile(name, prop)` (operates on in-file `contacts` array).
- `string-repetition.js` — `repeatStringNumTimes(str, num)` (demo `console.log`).

How to run (local)
- Run a single file with node:

```bash
node factorial-calculator.js
```

- Quick smoke test for all scripts in the repo root:

```bash
for f in *.js; do node "$f"; done
```

Debugging
- Launch Node inspector for a file:

```bash
node --inspect-brk <file.js>
```

Conventions & patterns (important for contributors and automation)
- File-per-solution: treat each `*.js` as a small runnable script rather than a library.
- Naming: filenames use kebab-case, function identifiers use camelCase.
- Style: ES6+ features are used but files are plain Node scripts — there is no `package.json` or build system.
- Demo side-effects: many files include top-level demo calls or `console.log`. Importing a file will execute these demos.

Exporting for tests (safe pattern)
- If you need to make a function importable, do both changes in the same commit:
  1) Add a `module.exports = { functionName }` entry at the bottom of the file.
  2) Wrap any demo invocations with a `require.main === module` guard, for example:

```javascript
if (require.main === module) {
  console.log(findLongestWordLength("What if we try ..."));
} else {
  module.exports = { findLongestWordLength };
}
```

Editing guidance (for small, safe changes)
- Keep diffs minimal and reversible — these are teaching snippets.
- Preserve function names and parameter lists (external graders may depend on signatures).
- When adding exports, include the guard in the same change to avoid new side-effects on import.

When to ask for human review
- Introducing `package.json`, tests, or converting files to ES module syntax.
- Changing function names, arities, or the visible output of demo calls.

PR guidance
- Make focused PRs: one file per fix/addition when possible.
- Explain in the PR why you guarded demo invocations or added exports.

Contact
- No special contact information in this repo — open a PR or issue in the upstream repository for questions.

Quick checklist for working on this repo
- [ ] Run the file locally with `node` to observe current demo output.
- [ ] If exporting, add `module.exports` and wrap demos with `require.main === module`.
- [ ] Run smoke test: `for f in *.js; do node "$f"; done`.

That's it — lightweight, runnable examples. Keep changes small and preserve the runnable-demo behavior.
