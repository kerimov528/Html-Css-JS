const number = document.getElementById('number');
const btns = document.querySelectorAll('button');
const counter = document.querySelector('#counter');

let count = 0;

console.log(btns);

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        let styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('reset')) {
            count = 0;
        } else if (styles.contains('increase')) {
            count++;
        }

        number.textContent = count;

        if (count < 0) {
            number.style.color = 'red';
            counter.style.color = 'red';
        }
        if (count > 0) {
            number.style.color = 'green';
            counter.style.color = 'green';
        }
        if (count === 0) {
            number.style.color = 'black';
            counter.style.color = 'black';
        }
    });
});
