fetch('files/menu.html')
.then(response => response.text())
.then(html => {
  document.querySelector('#menu').innerHTML += html;
});

fetch('files/content.html')
.then(response => response.text())
.then(html => {
  document.querySelector('#content').innerHTML += html;
});