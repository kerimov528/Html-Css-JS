const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const box1 = document.querySelector('.boxs');
const colorName = document.getElementById('color__name');

btn.addEventListener('click', function () {
 let hexColor = '#';

 for (let i = 0; i < 6; i++) {
  hexColor += colors[getRandomNumber()];
 }

 colorName.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
 return Math.floor(Math.random() * colors.length);
}

console.log(colors[getRandomNumber]);
