const btn = document.querySelector('button');
const displayItems = document.getElementById('items');
let active = true;

btn.addEventListener('click', () => {
 if (active) {
  displayItems.style.display = 'block';
  active = false;
 } else {
  displayItems.style.display = 'none';
  active = true;
 }
});
