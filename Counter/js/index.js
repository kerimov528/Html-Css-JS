function showTime() {
 const time = new Date();
 const timeNow =
  time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
 const h3 = document.getElementById('time');
 h3.innerText = timeNow;
}

setInterval(showTime, 1000);

setInterval(moveCar, 1);
const carBox = document.getElementById('car__box');

var x = 0;
function moveCar() {
 x++;

 if (x > 0 && x < 1000) {
  carBox.style.marginLeft = x + 'px';
  document.getElementById('text').innerText = x + 'px';
 } else {
  clearInterval(timer);
 }
}
