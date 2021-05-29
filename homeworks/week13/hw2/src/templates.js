export const cssTemplate = `
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  h1 {
    letter-spacing: 1.5rem;
  }
  .input-content, .comments {
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgb(0 0 0 / 20%);
  }
  input[type="text"], textarea {
    outline: none;
    box-shadow:none !important;
    border:1px solid #ccc !important;
  }
`;

export function getFrom(className, commentsClassName) {
  return `
  <div class="container input-content mt-5 p-4">
    <form class="${className}">
      <div class="form-group">
        <label">Nickname</label>
        <input type="text" class="form-control shadow-none" name="nickname">
      </div>
      <div class="form-group">
        <label">Contents</label>
        <textarea class="form-control shadow-none" name="content"" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-info form-btn">Submit</button>
    </form>
  </div>
  <div class="container comments mt-5 mb-5 p-4">
    <div class="${commentsClassName}">
    </div>
  </div>
  `;
}

export function getLoadMoreButton(className) {
  return `<button type="submit" class="btn btn-info ${className}">Load More...</button>`;
}
