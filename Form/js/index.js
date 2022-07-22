// info box

var firstInfo = document.querySelector('.first__info');
var secondInfo = document.querySelector('.second__info');
var thirdInfo = document.querySelector('.thrid__info');

console.log(firstInfo);

// progressive bar 

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");

// buttons 

var firstInfoNxt = document.querySelector('.first_nxt_btn');
var secondInfoBack = document.querySelector('.second_back_btn');
var secondInfoNxt = document.querySelector('.second_nxt_btn');
var thirdInfoBack = document.querySelector('.third_back_btn');
var thirdInfoNxt = document.querySelector('.third_nxt_btn');

// modal wrapper  

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

firstInfoNxt.addEventListener('click', () => {
    firstInfo.style.display = 'none';
    secondInfo.style.display = 'block';
    box2.classList.add('active');

})

secondInfoNxt.addEventListener('click', () => {
    secondInfo.style.display = 'none';
    thirdInfo.style.display = 'block';

    box3.classList.add('active');

})
secondInfoBack.addEventListener('click', () => {
    firstInfo.style.display = 'block';
    secondInfo.style.display = 'none';
    box2.classList.remove('active');

})

thirdInfoNxt.addEventListener('click', () => {
    modal_wrapper.classList.add("active");

})
thirdInfoBack.addEventListener('click', () => {
    secondInfo.style.display = 'block';
    thirdInfo.style.display = 'none';
    box3.classList.remove('active');
})

shadow.addEventListener("click", function () {
    modal_wrapper.classList.remove("active");

})