// boxs
const boxsInfo = document.querySelector("#boxsInfo");
const emptyBox = document.querySelector("#emptyBox");
const productBox = document.querySelector("#productBox");
const lightBox = document.querySelector("#lightBox");
const lightBox2 = document.querySelector("#lightBox_Main");
const sidebar = document.querySelector("#sidebar");
const productCount = document.querySelector("#productCount");
const payInfo = document.querySelector("#payInfo");
const mainImg = document.querySelector("#main_img");


// buttons 
const myPocket = document.querySelector("#myPocket");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const addToCart = document.querySelector("#addToCart");
const deleteProduct = document.querySelector("#deleteProduct");
const checkout = document.querySelector("#checkout");
const closeBtn1 = document.querySelector("#closeBtn1");
const closeBtn2 = document.querySelector("#closeBtn2");
var addCount = 0;

myPocket.addEventListener("click", () => {
        if (boxsInfo.style.display == "none") {
            boxsInfo.style.display = "block";
            if (addCount == 0) {
                emptyBox.style.display = "flex";
                productBox.style.display = "none";
            }
            else {
                emptyBox.style.display = "none";
                productBox.style.display = "flex";
            }
        }
        else {
            boxsInfo.style.display = "none";
        }
})

minus.addEventListener("click", () => {
    if (productCount.textContent == 0) {
        productCount.textContent = 0;
    }
    else {
        productCount.textContent = Number(productCount.textContent) - 1;
    }
})

plus.addEventListener("click", () => {
    if (productCount.textContent == 10) {
        alert("We have only 10 product");
        productCount.textContent = 10;
    }
    else {
        productCount.textContent = Number(productCount.textContent) + 1;
    }
})

addToCart.addEventListener("click", () => {
    var result;
    addCount = productCount.textContent;
    result = 125 * addCount;
    payInfo.textContent = `$125 x ${addCount} => $${result}`
})

deleteProduct.addEventListener("click", () => {
    emptyBox.style.display = "flex";
    productBox.style.display = "none";
    productCount.textContent = 0;
})

closeBtn1.addEventListener("click", () => {
    lightBox.style.display = "none";
    console.log("closeBtn1")
})
closeBtn2.addEventListener("click", () => {
    lightBox2.style.display = "none";
    console.log("closeBtn2")
})
mainImg.addEventListener("click", () => {
    lightBox2.style.display = "block";
    console.log("mainImg")
})
checkout.addEventListener("click", () => {
    lightBox2.style.display = "block";
    console.log("mainImg")
})
