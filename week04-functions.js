// week04-functions.js
// Five small functions, each doing one job and returning a value (no console.log inside).


// ---------- Functions ----------

// Returns the mean of a list of numbers. Empty list -> 0 (not NaN).
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total / numbers.length;
}

// Returns "A", "B", "C", "D" or "F" for a score.
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

// Returns an amount as cedis with two decimal places, e.g. 1250 -> "GH₵1,250.00".
function formatCedis(amount) {
  return "GH₵" + amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Returns true for 0 to 100 inclusive, otherwise false (also false for non-numbers like "abc").
function isValidScore(score) {
  if (typeof score !== "number" || Number.isNaN(score)) {
    return false;
  }
  return score >= 0 && score <= 100;
}

// My own function: returns true if a score is a pass (50 or above), otherwise false.
function isPassing(score) {
  return score >= 50;
}

// Lets the checker (or another file) load the functions without running into problems.
if (typeof module !== "undefined") {
  module.exports = { calculateAverage, getGrade, formatCedis, isValidScore, isPassing };
}

// ---------- Week 3 grade calculator, rewritten with the functions above ----------

const fallbackScores = [72, 45, 91, 88, 100, 50, 49, 105, -3];
const argScores = process.argv.slice(2).map(Number);
const scores = argScores.length > 0 ? argScores : fallbackScores;

const validScores = scores.filter(isValidScore);
const passed = validScores.filter(isPassing);

console.log("=== Grade Report ===");

for (const score of scores) {
  if (isValidScore(score)) {
    console.log(`${score} -> ${getGrade(score)} (${isPassing(score) ? "PASS" : "FAIL"})`);
  } else {
    console.log(`${score} -> skipped (must be between 0 and 100)`);
  }
}

console.log("--------------------");
console.log(`Average: ${calculateAverage(validScores).toFixed(2)}`);
console.log(`Passed: ${passed.length}, Failed: ${validScores.length - passed.length}`);
