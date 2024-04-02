const opens = document.querySelector('#open');
const closes = document.querySelector('#close');
const container = document.querySelector('.container');

opens.addEventListener('click',()=>container.classList.add('show-nav'));
closes.addEventListener('click',()=>container.classList.remove('show-nav'));