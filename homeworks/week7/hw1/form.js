/* eslint-disable no-restricted-syntax, no-continue, no-unused-vars */
window.onload = () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // 先阻止 submite 預設事件
    let hasError = false; // 先預設沒錯誤
    const values = {}; // 儲存填寫內容
    const elements = document.querySelectorAll('.required');

    for (const element of elements) {
      const radios = element.querySelectorAll('input[type=radio]');
      const input = element.querySelector('input[type=text]');
      let isValid = true; // input 是否有東西

      if (input) {
        values[input.name] = input.value; // 拿到輸入的值
        if (!input.value) {
          isValid = false;
        }
      } else if (radios.length) {
        isValid = [...radios].some(radio => radio.checked); // 有無和check
        if (isValid) { // 欄位有填寫
          const radioChecked = element.querySelector('input[type=radio]:checked');
          values[radioChecked.name] = radioChecked.value;
        }
      } else {
        continue;
      }
      if (!isValid) {
        element.classList.remove('hide-error');
        hasError = true;
      } else {
        element.classList.add('hide-error');
      }
    }
  });
};
