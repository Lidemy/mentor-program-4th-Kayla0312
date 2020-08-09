/*eslint-disable spaced-comment*/
/*eslint-disable no-shadow*/
/*eslint-disable no-use-before-define*/
/*eslint-disable no-mixed-operators*/
/*eslint-disable no-undef*/
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
    const [a, b, p] = lines[i].split(' ');
    const A = BigInt(a);
    const B = BigInt(b);
    if (A === B) {
      console.log('DRAW');
    } else if (A > B && p === 1 || A < B && p === -1) {
      console.log('A');
    } else {
      console.log('B');
    }
  }
}
rl.on('close', () => {
  solve(lines);
});
