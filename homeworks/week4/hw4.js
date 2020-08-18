/*eslint-disable spaced-comment*/
const request = require('request');

const CLIENT_ID = '3258fgrzobyejiu6e513olu366wjxs';

const topGame = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': CLIENT_ID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};
function callback(error, response, body) {
  let info;
  try {
    info = JSON.parse(body);
  } catch (err) {
    console.log(error);
  }
  //console.log(gameInfo); 取到預設的10筆 body 裡的 top 內容 => game(name...)＋viewers＋channels
  const gameInfo = info.top;
  for (let i = 0; i < gameInfo.length; i += 1) {
    //viwers（gameInfo[i].viewers）/name(gameInfo[i].game.name)
    console.log(`${gameInfo[i].viewers} ${gameInfo[i].game.name}`);
  }
}
request(topGame, callback);
