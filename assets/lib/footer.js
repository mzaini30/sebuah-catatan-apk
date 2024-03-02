var textarea = document.querySelector('textarea');
if (textarea) {
  textarea.parentNode.querySelector('section').outerHTML = /*html*/ `
    <div class='container'>
      <article>
        ${marked.parse(textarea.value)}
      </article>
    </div>
    `

  // marked.parse(textarea.value);

}