/*eslint-disable spaced-comment*/
/* eslint-disable no-shadow */

const request = require('request');
const process = require('process');

const arg = process.argv;
const name = arg[2];

request(`https://restcountries.eu/rest/v2/name/${name}`, (error, response, body) => {
  if (error) {
    console.log('抓取失敗', error);
    return;
  }
  let info;
  try {
    info = JSON.parse(body);
  } catch (error) {
    console.log(error);
  }
  if (info.status === 404) {
    console.log('找不到國家資訊');
  }
  for (let i = 0; i < info.length; i += 1) {
    console.log('國家：', info[i].name); //eesti
    console.log('首都：', info[i].capital); //Tallinn
    console.log('貨幣：', info[i].currencies[0].code); //currencies [0]=> code: 'EUR', name: 'Euro', symbol: '€'
    console.log('首都：', info[i].callingCodes[0]); //不寫[0]會印出=> 首都： [ '372' ]
  }
});
