const search = document.getElementById('search');
const icon = document.getElementById('icon');
const input = document.getElementById('input');
const overlay = document.getElementById('overlay');

icon.addEventListener('click', () => {
  search.classList.add('open')
  overlay.style.display = 'block'
});

overlay.addEventListener('click', () => {
  search.classList.remove('open')
  overlay.style.display = 'none'
  input.value = ''
});
