const btn = document.querySelector('#btn');
const main = document.querySelector('.main');

btn.addEventListener('click', () => {
  main.classList.toggle('mainAdd');
})