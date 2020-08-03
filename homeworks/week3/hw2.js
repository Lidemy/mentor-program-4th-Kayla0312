/*eslint-disable spaced-comment*/
/*eslint-disable no-shadow*/
/*eslint-disable no-param-reassign*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

//1.判斷幾位數
//除 10 直到 n=0
//排除0
function digitsCount(n) {
  let result = 0;
  if (n === 0) return 1;
  while (n !== 0) {
    n = Math.floor(n / 10);
    result += 1;
  }
  return result;
}
//2.判斷是否是水仙花數
//取餘數直到 n 不等於 0
//對 10 取於數,由數字後開始取
// 取出數字 ** 平方 => 加總
// 除 10 後,捨去餘數,進行下一次計算
function isNarcissisticNum(n) {
  let m = n;
  const digits = digitsCount(m);
  let sum = 0;
  while (m !== 0) {
    const num = m % 10;
    sum += num ** digits;
    m = Math.floor(m / 10);
  }
  //判斷結果
  if (n === sum) {
    return true;
  } return false;
}
// 分開傳入的 lines
// 判斷傳入的兩個數字範圍是否為水仙花數
// 印出是水仙花數的數字
function solve(lines) {
  const separateNum = lines[0].split(' ');
  const first = Number(separateNum[0]);
  const second = Number(separateNum[1]);
  for (let i = first; i <= second; i += 1) {
    if (isNarcissisticNum(i)) {
      console.log(i);
    }
  }
}
rl.on('close', () => {
  solve(lines);
});
