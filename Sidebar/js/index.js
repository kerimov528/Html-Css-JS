const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('#menu-span');
const closeBtn = document.querySelector('#close-span');

closeBtn.addEventListener('click', () => {
    if (!sidebar.classList.contains('hide__sidebar')) {
        sidebar.classList.add('hide__sidebar');
    }
});
menuBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('hide__sidebar')) {
        sidebar.classList.remove('hide__sidebar');
    }
});
