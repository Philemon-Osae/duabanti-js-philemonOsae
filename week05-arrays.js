const students = [
  { name: "Kwesi", score: 58 },
  { name: "Akosua", score: 93 },
  { name: "Fiifi", score: 41 },
  { name: "Adwoa", score: 77 },
  { name: "Nana", score: 50 },
  { name: "Serwaa", score: 62 },
  { name: "Yaw", score: 35 },
  { name: "Ama", score: 88 },
  { name: "Kojo", score: 49 },
];

function getNames(students) {
  return students.map((s) => s.name);
}

function getPassing(students) {
  return students.filter((s) => s.score >= 50);
}

function getTotal(students) {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].score;
  }
  return total;
}

function getTopScorer(students) {
  let topScore = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > topScore) {
      topScore = students[i].score;
    }
  }
  return students.find((s) => s.score === topScore);
}

function rank(students) {
  let copy = students.slice();
  return copy.sort((a, b) => b.score - a.score);
}

console.log("Names: " + getNames(students));
console.log("Passing students: ", getPassing(students));
console.log("Total score: " + getTotal(students));
console.log("Top scorer: ", getTopScorer(students));
console.log("Ranked highest to lowest: ", rank(students));
console.log("Original list: ", students);