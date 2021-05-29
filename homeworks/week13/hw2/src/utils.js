/* eslint-disable no-useless-escape */

// XSS
export function escape(toOutput) {
  return toOutput.replace(/\&/g, '&amp;')
    .replace(/\</g, '&lt;')
    .replace(/\>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/\'/g, '&#x27')
    .replace(/\//g, '&#x2F');
}

export function appendStyle(cssTemplate) {
  // add style tag
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(cssTemplate));
  document.head.appendChild(styleElement);
}

// 動態新增資料->HTML
export function appendCommentToDOM(container, comment, isPrepend) {
  const html = `
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">${escape(comment.nickname)}</h5>
        <hr>
        <p class="card-text">${escape(comment.content)}</p>
      </div>
    </div>
  `;
  if (isPrepend) {
    // 加入結尾
    container.prepend(html);
  } else {
    // 加入開頭
    container.append(html);
  }
}
