const images = [
    "Image/image-1.avif",
    "Image/image-2.avif",
    "Image/image-3.avif",
    "Image/image-4.avif",
    "Image/image-5.avif"
];

let currentIndex = 0;

const image = document.getElementById("sliderImage");
const counter = document.getElementById("counter");
const dotsContainer = document.getElementById("dots");


function createDots() {

    for (let i = 0; i < images.length; i++) {

        let dot = document.createElement("span");

        dot.classList.add("dot");

        dot.addEventListener("click", function () {

            currentIndex = i;

            showImage(currentIndex);

        });

        dotsContainer.appendChild(dot);

    }

}

function showImage(index) {

    image.src = images[index];

    updateCounter();

    updateDots();

}

function nextSlide() {

    currentIndex++;

    if (currentIndex == images.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

}

function prevSlide() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage(currentIndex);

}

function updateCounter() {

    counter.innerHTML = `Image ${currentIndex + 1} of ${images.length}`;

}

function updateDots() {

    const dots = document.querySelectorAll(".dot");

    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });

    dots[currentIndex].classList.add("active");

}

document.getElementById("next").addEventListener("click", nextSlide);

document.getElementById("prev").addEventListener("click", prevSlide);

createDots();

showImage(currentIndex);

