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

function reverStr(str) {
  return str.split('').reverse().join('');
}

//判斷是否反轉字
function solve(lines) {
  const str = lines[0];
  if (reverStr(str) === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}

rl.on('close', () => {
  solve(lines);
});
