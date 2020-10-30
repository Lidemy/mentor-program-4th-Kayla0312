/* eslint-disable no-alert */
window.onload = () => {
  const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
  document
    .querySelector('.lottery-btn')
    .addEventListener('click', () => {
      const xhr = new XMLHttpRequest();
      const erroeMessage = '系統不穩定，請再試一次';
      xhr.open('GET', apiUrl, true);
      // 回傳正確時
      xhr.onload = () => {
        // 錯誤處理
        if (xhr.status >= 200 && xhr.status < 400) {
          let result;
          try {
            result = JSON.parse(xhr.response);
          } catch (err) {
            alert(erroeMessage);
            return;
          }
          if (!result.prize) {
            alert(erroeMessage);
          }
          // 拿到資料
          let className;
          let title;

          if (result.prize === 'FIRST') {
            className = 'first-prize';
            title = '恭喜你中頭獎了！日本東京來回雙人遊！';
          } else if (result.prize === 'SECOND') {
            className = 'second-prize';
            title = '二獎！90吋電視一台！';
          } else if (result.prize === 'THIRD') {
            className = 'third-prize';
            title = '恭喜你抽中三獎：知名YouTuber簽名握手會入場券一張，bang！';
          } else if (result.prize === 'NONE') {
            className = 'none-prize';
            title = '銘謝惠顧';
          }
          document.querySelector('.lottery-background').classList.add(className);
          document.querySelector('.lottery-result_title').innerText = title;
          document.querySelector('.lottery-info').classList.add('hide');
          document.querySelector('.lottery-result').classList.remove('hide');
        }
      };
      // 回傳錯誤時
      xhr.onerror = () => { alert(erroeMessage); };
      xhr.send();
    });
};
