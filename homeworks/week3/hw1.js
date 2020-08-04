/*eslint-disable spaced-comment*/
/*eslint-disable no-shadow*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(lines) {
  const n = Number(lines[0]);
  for (let i = 1; i <= n; i += 1) {
    console.log('*'.repeat(i));
  }
}
rl.on('close', () => {
  solve(lines);
});
