// Html Declaration 
const animationText = document.getElementById('animationText');
const inputTxt = document.getElementById('inputTxt');
const start = document.getElementById('start')

// Main variables 
var textArr, 
    animationTextArr = [],
    letterPlace = 0,
    write, pop;

// Starting Animation
start.addEventListener('click', startAnimation)
function startAnimation(e) {
    e.preventDefault();
    textArr = Array.from(inputTxt.value);
    write = setInterval(() => {
        writeToDisplay();
    }, 1000);
}

//To Show letters of Word one by one
function writeToDisplay() {
    animationTextArr.push(textArr[letterPlace]);
    animationText.innerHTML += animationTextArr[letterPlace];
    letterPlace++;
    if (letterPlace === textArr.length) {
        clearInterval(write);
        pop = setInterval(() => {
            popFromDisplay();
        }, 1000);
    }
}

//Pop letters of Word one by one
function popFromDisplay() {
    animationText.innerHTML = inputTxt.value.slice(0,animationText.innerHTML.length - 1)
    if(animationText.innerHTML.length === 0) {
        clearInterval(pop);
        inputTxt.value = '';
    }
}