// Select elements
const filterButtons = document.querySelectorAll(".buttons button");
const images = document.querySelectorAll(".image");
const searchInput = document.getElementById("search");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let visibleImages = [];

// ---------------- FILTER ----------------

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        images.forEach(image => {

            if(filter === "all" || image.classList.contains(filter)){

                image.style.display = "block";

            }

            else{

                image.style.display = "none";

            }

        });

    });

});

// ---------------- SEARCH ----------------

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    images.forEach(image => {

        const text = image.className.toLowerCase();

        if(text.includes(value)){

            image.style.display = "block";

        }

        else{

            image.style.display = "none";

        }

    });

});

// ---------------- LIGHTBOX ----------------

function updateVisibleImages(){

    visibleImages = [...document.querySelectorAll(".image")].filter(img => {

        return img.style.display !== "none";

    });

}

updateVisibleImages();

images.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        updateVisibleImages();

        currentIndex = visibleImages.indexOf(image);

        lightbox.style.display="flex";

        lightboxImage.src=image.querySelector("img").src;

    });

});

// ---------------- CLOSE ----------------

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

// Close when clicking outside image

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

// ---------------- NEXT ----------------

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=visibleImages.length){

        currentIndex=0;

    }

    lightboxImage.src=visibleImages[currentIndex].querySelector("img").src;

});

// ---------------- PREVIOUS ----------------

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=visibleImages.length-1;

    }

    lightboxImage.src=visibleImages[currentIndex].querySelector("img").src;

});

// ---------------- KEYBOARD ----------------

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display==="flex"){

        if(e.key==="ArrowRight"){

            nextBtn.click();

        }

        else if(e.key==="ArrowLeft"){

            prevBtn.click();

        }

        else if(e.key==="Escape"){

            lightbox.style.display="none";

        }

    }

});