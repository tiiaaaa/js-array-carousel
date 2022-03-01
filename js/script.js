const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let carouselContent = "";

for (let i = 0; i < items.length; i = i + 1){
    carouselContent += `
    <div class="my-carousel">
            <img class="my-main-img" src="${items[i]}" alt="picture">
    </div>`
}

const carouselWrapper = document.querySelector("div.my-carousel-box");
carouselWrapper.innerHTML += carouselContent;

const carouselElement = document.getElementsByClassName("my-carousel");

carouselElement[0].classList.add("active");
console.log(carouselElement);

const nextButton = document.querySelector(".my-btn-down");
console.log(nextButton);

let activeElement = 0;

nextButton.addEventListener("click", function(){

    if (activeElement < 4){
        carouselElement[activeElement].classList.remove("active");

        activeElement++;

        carouselElement[activeElement].classList.add("active");
    } else{
        console.log("siamo alla fine!");
    }
});
