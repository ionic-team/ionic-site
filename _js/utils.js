// sidebar toggle for mobile views
document.getElementById('sidebar-toggle').onclick = function(a,b,c) {
  document.getElementById('side-nav').classList.toggle('shown');
  this.classList.toggle('active')
};

// highlight.js syntax highlighting
hljs.initHighlightingOnLoad();
