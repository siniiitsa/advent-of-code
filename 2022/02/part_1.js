import fs from 'fs';

// Opponent's shapes
// A - Rock
// B - Paper
// C - Scissors

// My shapes
// X - Rock
// Y - Paper
// Z - Scissors

const winningCombinations = ['A Y', 'B Z', 'C X'];
const drawCombinations = ['A X', 'B Y', 'C Z'];
const pointsPerShape = {
  X: 1,
  Y: 2,
  Z: 3,
};

const calcRoundScore = (combination) => {
  const myShape = combination[2];
  const pointsForShape = pointsPerShape[myShape];

  const isWin = winningCombinations.includes(combination);
  const isDraw = drawCombinations.includes(combination);
  const pointsForWin = isWin ? 6 : isDraw ? 3 : 0;

  return pointsForShape + pointsForWin;
};

const data = fs.readFileSync('2022/02/input.txt', 'utf-8');
const rounds = data.trim().split('\n');
const score = rounds.map(calcRoundScore).reduce((a, b) => a + b);

console.log({ score });
