!(function () {
  var wt = document.createElement('div')
  var isMarkdown = document.querySelector('.markdown-body');
  wt.textContent = isMarkdown ? 'Markdown記法' : 'Backlog記法';
  wt.style.display = 'inline-block';
  wt.style.backgroundColor = isMarkdown ? '#4a525a' : '#2c9a7a';
  wt.style.color = 'white';
  wt.style.padding = '3px 10px';
  wt.style.borderRadius = '15px';
  wt.style.fontSize = '10px';
  wt.style.verticalAlign = 'middle';
  document.querySelector('.global-header-inner__right').prepend(wt);
})();