/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-template */

window.onload = () => {
  const request = new XMLHttpRequest();
  const API_URL = 'https://api.twitch.tv/kraken';
  const CLIENT_ID = '3258fgrzobyejiu6e513olu366wjxs';

  // request => Get topgame*5
  request.open('GET', `${API_URL}/games/top?limit=5`, true);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', CLIENT_ID);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      // 新增第一筆遊戲
      const games = JSON.parse(request.response).top;
      for (const game of games) {
        const element = document.createElement('li');
        element.innerText = game.game.name;
        document.querySelector('.navbar__list').appendChild(element);
      }

      // replace game name title
      document.querySelector('h1').innerText = games[0].game.name;

      // request => outerHTML add div content
      const request2 = new XMLHttpRequest();
      request2.open('GET', `${API_URL}/streams/?game=` + encodeURIComponent(games[0].game.name), true);
      request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
      request2.setRequestHeader('Client-ID', CLIENT_ID);
      request2.onload = () => {
        if (request2.status >= 200 && request2.status < 400) {
          const data = JSON.parse(request2.response).streams;
          for (const stream of data) {
            const element = document.createElement('div');
            document.querySelector('.streams').appendChild(element);
            element.outerHTML = `
              <a href="https://www.twitch.tv/${stream.channel.name}" target="_blank">
                <div class="stream">
                  <div class="stream__video">
                    <img src="${stream.preview.medium}">
                  </div>
                  <div class="stream__data">
                    <div class="stream__avatar">
                      <img src="${stream.channel.logo}" alt="">
                    </div>
                    <div class="stream__info">
                      <div class="stream__title">${stream.channel.status}</div>
                      <div class="stream__channel">${stream.channel.name}</div>
                    </div>
                  </div> 
                </div>
              </a>
              `;
          }
        }
      };
      request2.send();
    }
  };
  request.send();
  // 切換 navbar => 對應遊戲實況內容
  document.querySelector('.navbar__list').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      const gameName = e.target.innerText;
      document.querySelector('h1').innerText = gameName;
      document.querySelector('.streams').innerText = '';
      const request2 = new XMLHttpRequest();
      request2.open('GET', `${API_URL}/streams/?game=` + encodeURIComponent(gameName), true);
      request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
      request2.setRequestHeader('Client-ID', CLIENT_ID);
      request2.onload = () => {
        if (request2.status >= 200 && request2.status < 400) {
          const data = JSON.parse(request2.response).streams;
          for (const stream of data) {
            const element = document.createElement('div');
            document.querySelector('.streams').appendChild(element);
            element.outerHTML = `
            <a href="https://www.twitch.tv/${stream.channel.name}" target="_blank">
            <div class="stream">
              <div class="stream__video">
                <img src="${stream.preview.medium}">
              </div>
              <div class="stream__data">
                <div class="stream__avatar">
                  <img src="${stream.channel.logo}" alt="">
                </div>
                <div class="stream__info">
                  <div class="stream__title">${stream.channel.status}</div>
                  <div class="stream__channel">${stream.channel.name}</div>
                </div>
              </div> 
            </div>
          </a>
          `;
          }
        }
      };
      request2.send();
    }
  });

  // 漢堡選單
  const mobileMenu = document.querySelector('.mobile-menu');
  const navbarList = document.querySelector('.navbar__list');
  mobileMenu.addEventListener('click', () => {
    navbarList.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
};
