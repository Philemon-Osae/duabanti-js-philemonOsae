# Week 3 Notes: Grade Calculator

## What I built
`week03-grade-calculator.js` takes a list of scores, works out the average and gives each score a letter grade. It has three functions:

- `average(scores)` returns the mean, and returns `0` for an empty list instead of `NaN`.
- `getGrade(score)` returns A (90+), B (80-89), C (70-79), D (50-69) or F (below 50) using `if / else if / else`.
- `isValidScore(score)` returns `true` for 0 to 100 inclusive, otherwise `false`.

Below the functions, a loop goes through the scores, prints each valid one with its grade, skips and reports invalid ones, and prints the overall average. Scores come from `process.argv` (e.g. `node week03-grade-calculator.js 72 45 91`), or from a fallback list in the file if none are given.

Stretch: it also prints PASS/FAIL for each score (F is a fail) and counts how many passed and failed.

## What got me stuck

- Why average of an empty list gives NaN (0 / 0) and how the guard fixes it
- Remembering that process.argv values are strings, so they need Number()
- Whether the average should include invalid scores (I chose to leave them out) -->

## Did I use AI?
Yes. I used Claude to help me fix where i got stucked .
