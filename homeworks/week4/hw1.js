/* eslint-disable no-shadow */

const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  if (error) {
    console.log('抓取失敗');
    return;
  }
  let info;
  try {
    info = JSON.parse(body);
  } catch (error) {
    console.log(error);
    return;
  }
  for (let i = 0; i < info.length; i += 1) {
    console.log(`${info[i].id} ${info[i].name}`);
  }
});
