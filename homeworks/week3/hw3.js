/*eslint-disable spaced-comment*/
/*eslint-disable no-shadow*/
/*eslint-disable no-use-before-define*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(lines) {
  for (let i = 1; i < lines.length; i += 1) {
    if (isPrime(Number(lines[i]))) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
  function isPrime(n) {
    if (n === 1) return false;
    for (let j = 2; j < n; j += 1) {
      if (n % j === 0) {
        return false;
      }
    }
    return true;
  }
}
rl.on('close', () => {
  solve(lines);
});
