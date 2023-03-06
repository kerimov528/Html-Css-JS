const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const symbol = document.querySelector("#symbol");
const True = document.querySelector(".ifTrue");
const False = document.querySelector(".ifFalse");
const Btn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector("#resetBtn");
const infoMessage = document.querySelector("#info");
const answer = document.querySelector("#answer");
const main = document.querySelector("#main");
const symbolList = ["+", "-", "*", "/"];

const winInfo = document.querySelector("#win");
const loseInfo = document.querySelector("#lose");


window.onload = () => {
    newQuestion();
};

//Verilmis suala cavab verib yoxlamaq
Btn.addEventListener("click", () => {
    var result, randomNum1, randomNum2;
    randomNum1 = Number(num1.textContent);
    randomNum2 = Number(num2.textContent);
    if (answer.value == "" || isNaN(answer.value)) {
        infoMessage.textContent = "You must enter an answer that must be Number ";
        infoMessage.parentElement.style.display = "block";
        setTimeout(() => {
            infoMessage.parentElement.style.display = "none";
        }, 3000)
    }
    else {
        switch (symbol.textContent) {
            case "+": result = randomNum1 + randomNum2; break;
            case "-": result = randomNum1 - randomNum2; break;
            case "*": result = randomNum1 * randomNum2; break;
            case "/": result = randomNum1 / randomNum2; break;
            default: break;
        }
        if (result === Number(answer.value)) {
            True.textContent = Number(True.textContent) + 1;
        }
        else {
            False.textContent = Number(False.textContent) + 1;
        }
        console.log(randomNum1, randomNum2, result);
        newQuestion();

        if (True.textContent == 10) {
            main.style.display = "none";
            winInfo.style.display = "block";
            setTimeout(() => {
                main.style.display = "flex";
                winInfo.style.display = "none";
            }, 4000)
            True.textContent = 0;
            False.textContent = 0;

        }
        else if (False.textContent == 10) {
            main.style.display = "none";
            loseInfo.style.display = "block";
            setTimeout(() => {
                main.style.display = "flex";
                loseInfo.style.display = "none";
            }, 4000)
            True.textContent = 0;
            False.textContent = 0;
        }
    }
});

//Oyunu sifirlamaq
resetBtn.addEventListener("click", () => {

});
//Random bir eded qaytarmaq
getRandomNumber = (min, max) => {
    var number;
    number = Math.floor(Math.random() * (max - min) + min);
    return number;
}

//Yeni sual vermek
newQuestion = () => {
    answer.value = "";
    num1.textContent = getRandomNumber(0, 50);
    num2.textContent = getRandomNumber(0, 50);
    symbol.textContent = symbolList[getRandomNumber(0, 4)];
    if (symbol.textContent == "/") {
        while (true) {
            num2.textContent = getRandomNumber(0, 50);
            if (num1.textContent % num2.textContent == 0) {
                break;
            }
        }
    }
}