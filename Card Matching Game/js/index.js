$(() => {
    console.log("worked");
    getSrcImg();


    function getSrcImg(){
        $.getJSON("../json/card.json", 
        
        (data) => {
            $("div#card__row").html("");
    console.log("$('div#card__row').html('') => ", $("div#card__row").html(""))


            $.each(data, function (key, value) {
        console.log("value => ", value);

                for (let i = 0; i < value.length * 2; i++) {
        console.log("value length => ", value.length * 2);         
                let str = "";

                let cornerImg =
                    "https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Images/Cobweb.png";

                let cornerImgGrey =
                    "https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Images/CobwebGrey.png";

                let spider =
                    "https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Images/Spider.png";

                str += "<div class='col rounded visible'>";
                str += `<div class="card-back card-face bg-dark rounded">
                     <img class="cob-web cob-web-top-left"
                       src="${cornerImg}">
                     <img class="cob-web cob-web-top-right"
                       src="${cornerImg}">
                     <img class="cob-web cob-web-bottom-left"
                       src="${cornerImg}">
                     <img class="cob-web cob-web-bottom-right"
                       src="${cornerImg}">
                     <img class="spider"
                       src="${spider}">
                   </div>
                   <div class="card-front card-face">
                     <img class="cob-web cob-web-top-left"
                       src="${cornerImgGrey}">
                     <img class="cob-web cob-web-top-right"
                       src="${cornerImgGrey}">
                     <img class="cob-web cob-web-bottom-left"
                       src="${cornerImgGrey}">
                     <img class="cob-web cob-web-bottom-right"
                       src="${cornerImgGrey}">
                     <img class="card-value"
                       src="${value.mainImg}">
                   </div>`;
                str += "</div>";            
                
            }

                $("div#card__row").html($("div#card__row").html() + str);

            });
        });
    };
});
