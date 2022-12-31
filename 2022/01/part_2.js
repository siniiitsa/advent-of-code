import fs from 'fs';

const data = fs.readFileSync('2022/01/input.txt', 'utf-8');
const caloriesPerElf = data.split('\n\n').map((item) =>
  item
    .split('\n')
    .map(Number)
    .reduce((a, b) => a + b)
);
const [first, second, third] = caloriesPerElf.sort((a, b) => b - a);

console.log({ total: first + second + third });
