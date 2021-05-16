/* eslint-disable camelcase */
/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */
/* eslint-disable-next-line prefer-const */
/* eslint-disable prefer-const */

import $ from 'jquery';
import { getComments, addComments } from './api';
import { appendStyle, appendCommentToDOM } from './utils';
import { cssTemplate, getLoadMoreButton, getFrom } from './templates';

// 初始化
// eslint-disable-next-line import/prefer-default-export
export function init(options) {
  let siteKey = '';
  let apiUrl = '';
  let containerElement = null;
  let cursorID = null;
  let isEnd = false;
  let commentDOM = null;
  let loadMoreClassName;
  let commentsClassName;
  let commentsSelector;
  let formClassName;
  let formSelector;

  siteKey = options.siteKey;
  apiUrl = options.apiUrl;
  containerElement = $(options.containerSelector);
  loadMoreClassName = `${siteKey}-load-more-btn`;
  commentsClassName = `${siteKey}-comment-list`;
  commentsSelector = `.${commentsClassName}`;
  formClassName = `${siteKey}-add-comment-form`;
  formSelector = `.${formClassName}`;
  containerElement.append(getFrom(formClassName, commentsClassName));

  $(formSelector).submit((e) => {
    e.preventDefault();
    const nicknameDOM = $(`${formSelector} input[name=nickname]`);
    const contentDOM = $(`${formSelector} textarea[name=content]`);
    const newCommentData = {
      site_key: siteKey,
      nickname: nicknameDOM.val(),
      content: contentDOM.val(),
    };
    addComments(apiUrl, siteKey, newCommentData, (data) => {
      if (!data.ok) {
        // eslint-disable-next-line no-alert
        alert(data.message);
        return;
      }
      nicknameDOM.val('');
      contentDOM.val('');
      appendCommentToDOM(commentDOM, newCommentData, true);
    });
  });
  // 印出拿到的資料
  function getNewComments() {
    // eslint-disable-next-line no-shadow
    const commentDOM = $(commentsSelector);
    $(`.${loadMoreClassName}`).hide();
    if (isEnd) {
      return;
    }
    getComments(apiUrl, siteKey, cursorID, (data) => {
      if (!data.ok) {
        // eslint-disable-next-line no-alert
        alert(data.message);
        return;
      }
      const comments = data.discussions;
      // eslint-disable-next-line no-restricted-syntax
      for (let comment of comments) {
        // eslint-disable-next-line no-shadow
        appendCommentToDOM(commentDOM, comment);
      }
      const length = comments.length;
      if (length === 0) {
        isEnd = true;
        $(`.${loadMoreClassName}`).hide();
      } else {
        cursorID = comments[length - 1].id;
        const loadMoreButtonHTML = getLoadMoreButton(loadMoreClassName);
        $(commentsSelector).append(loadMoreButtonHTML);
      }
    });
  }
  appendStyle(cssTemplate);
  commentDOM = $(commentsSelector);
  getNewComments();
  commentDOM.on('click', `.${loadMoreClassName}`, () => {
    getNewComments();
  });
}
