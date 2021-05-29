// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line camelcase

import $ from 'jquery';

export function getComments(apiUrl, siteKey, cursorID, cb) {
  let url = `${apiUrl}/api_comments.php?site_key=${siteKey}`;
  if (cursorID) {
    url += `&cursor_id=${cursorID}`;
  }
  $.ajax({
    url,
  }).done((data) => {
    cb(data);
  });
}
export function addComments(apiUrl, siteKey, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_add_comments.php`,
    data,
    // eslint-disable-next-line no-shadow
  }).done((data) => {
    cb(data);
  });
}
