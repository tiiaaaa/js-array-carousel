const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


let sliderContent = "";
let thumbnailsContent = "";

for (let i = 0; i < images.length; i = i + 1){
    sliderContent += `
    <div class="my-carousel">
        <img class="my-carousel-picture" src="${images[i]}" alt="${title[i]}">
        <div class="my-carousel-description">
            <h2>${title[i]}</h2>
            <p>${title[i]}</p>
        </div>
    </div>`

    thumbnailsContent += `
    <div class="my-thumbnail">
        <img class="my-thumbnail-img" src="${images[i]}" alt="${title[i]}">
    </div>`
}

const sliderElement = document.querySelector("div.my-slider");
sliderElement.innerHTML = sliderContent;

const thumbnailsElement = document.querySelector("div.my-thumbnails");
thumbnailsElement.innerHTML += thumbnailsContent;












// let carouselContent = "";

// for (let i = 0; i < items.length; i = i + 1){
//     carouselContent += `
//     <div class="my-carousel">
//             <img class="my-main-img" src="${items[i]}" alt="picture">
//     </div>`
// }

// const carouselWrapper = document.querySelector("div.my-carousel-box");
// carouselWrapper.innerHTML += carouselContent;

// const carouselElement = document.getElementsByClassName("my-carousel");

// carouselElement[0].classList.add("active");
// console.log(carouselElement);

// const nextButton = document.querySelector(".my-btn-down");
// console.log(nextButton);

// let activeElement = 0;

// nextButton.addEventListener("click", function(){

//     if (activeElement < 4){
//         carouselElement[activeElement].classList.remove("active");

//         activeElement++;

//         carouselElement[activeElement].classList.add("active");
//     } else{
//         console.log("siamo alla fine!");
//     }
// });


// const prevButton = document.querySelector(".my-btn-up");
// console.log(prevButton);

// prevButton.addEventListener("click", function(){
//     if (activeElement > 0){
//         carouselElement[activeElement].classList.remove("active");

//         activeElement--;

//         carouselElement[activeElement].classList.add("active");
//     } else{
//         console.log("siamo alla fine!");
//     }
// })