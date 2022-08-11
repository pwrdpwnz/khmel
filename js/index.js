const form = document.querySelector('.form');
const button = document.querySelector('.help-container');

button.addEventListener('click', () => {
  form.classList.toggle('form-show');
});