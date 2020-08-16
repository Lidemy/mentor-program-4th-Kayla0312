/*eslint-disable spaced-comment*/
/* eslint-disable no-shadow */

const request = require('request');
const process = require('process');

const arg = process.argv;
const action = arg[2];
const params = arg[3];

//印出前 20本書的 id＋name
function listBook() {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
    let info;
    try {
      info = JSON.parse(body);
    } catch (error) {
      console.log(error);
      return;
    }
    for (let i = 0; i < info.length; i += 1) {
      console.log(info[i].id, info[i].name);
    }
  });
}

//輸出 id 為 ** 的書籍
function readBook(id) {
  request(`https://lidemy-book-store.herokuapp.com/books/${id}`, (error, response, body) => {
    if (error) {
      console.log('抓取失敗');
    }
    let info;
    try {
      info = JSON.parse(body);
    } catch (error) {
      console.log(error);
      return;
    }
    console.log(info);
  });
}

//create 一本 “I love coding” 的書
function creatBook(name) {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books/',
    form: { name },
  }, (error) => {
    if (error) {
      console.log('抓取失敗');
    }
    console.log('新增成功！書名：', name);
  });
}

//delete id
function deleteId(id) {
  request.del(`https://lidemy-book-store.herokuapp.com/books/${id}`, (error) => {
    if (error) {
      console.log('error:', error);
    }
  },
  console.log(`刪除id:${id}`));
}

//更新id為 ** 的書名為 new name
function updateName(id, name) {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
    form: { name },
  }, (error) => {
    if (error) {
      console.log('error:', error);
    }
    console.log(`更新成功! id:${id} 書名：${name}`);
  });
}
switch (action) {
  case 'list':
    listBook(); //執行listBook function
    break;
  case 'read':
    readBook(params); // 第四個＝> id
    break;
  case 'create':
    creatBook(params); // 第四個 ＝> "I love coding"
    break;
  case 'delete':
    deleteId(params); //第四個 ＝>要刪除的 id
    break;
  case 'update':
    updateName(params, arg[4]); //第三＋四個 ＝> 要更新的id + updateName
    break;
  default:
    console.log('Available commands: list, read, create, delete and update');
}
