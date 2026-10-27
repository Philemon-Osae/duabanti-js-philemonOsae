// week03-grade-calculator.js

// Returns the mean of a list of numbers. Empty list -> 0 (not NaN).
function average(scores) {
  if (scores.length === 0) {
    return 0;
  }
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total / scores.length;
}

// Returns true for 0 to 100 inclusive, otherwise false.
// Also false for things that aren't real numbers (e.g. "abc" from the command line).
function isValidScore(score) {
  if (typeof score !== "number" || Number.isNaN(score)) {
    return false;
  }
  return score >= 0 && score <= 100;
}

// Returns "A", "B", "C", "D" or "F".
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}


if (typeof module !== "undefined") {
  module.exports = { average, getGrade, isValidScore };
}

//  Scores: from process.argv, with a list to fall back on 

const fallbackScores = [72, 45, 91, 88, 100, 50, 49, 105, -3];

const argScores = process.argv.slice(2).map(Number);
const scores = argScores.length > 0 ? argScores : fallbackScores;

//  Loop: print results 

console.log("=== Grade Report ===");

const validScores = [];
let passCount = 0;
let failCount = 0;

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];

  if (!isValidScore(score)) {
    console.log(`Score ${i + 1}: ${score} -> skipped (must be between 0 and 100)`);
    continue;
  }

  const grade = getGrade(score);
  validScores.push(score);

  // Stretch: D and above is a pass, F is a fail
  const passed = grade !== "F";
  if (passed) {
    passCount++;
  } else {
    failCount++;
  }

  console.log(`Score ${i + 1}: ${score} -> ${grade} (${passed ? "PASS" : "FAIL"})`);
}

console.log("--------------------");
console.log(`Valid scores: ${validScores.length} of ${scores.length}`);
console.log(`Average: ${average(validScores).toFixed(2)}`);

// Stretch: pass / fail summary
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
