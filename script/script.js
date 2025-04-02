let lastScrollTop = 0; // Keep track of the last scroll position

window.onscroll = function() {
    const navbar = document.getElementById("navbar");

    // Check if the user is scrolling down or up
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add("navbar-hidden"); // Hide navbar
    } else {
        // Scrolling up
        navbar.classList.remove("navbar-hidden"); // Show navbar
    }

    // Add transparency to the navbar when scrolling down more than 50px
    if (currentScroll > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

    // Update lastScrollTop to current scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
};







function flipCard(cardElement) {
    const isFlipped = cardElement.style.transform === "rotateY(180deg)";
    cardElement.style.transform = isFlipped ? "rotateY(0deg)" : "rotateY(180deg)";
}



document.addEventListener("contextmenu", function(e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
});






// Get the carousel element and slide number display element
const carousel = document.getElementById('domeCarousel');
const slideNumberDisplay = document.getElementById('carousel-slide-number');

// Event listener for carousel slide change
carousel.addEventListener('slid.bs.carousel', function () {
    const totalSlides = carousel.querySelectorAll('.carousel-item').length; // Total number of slides
    const activeIndex = $('.carousel-item.active').index() + 1; // Active slide index (1-based)

    // Update the slide number display
    slideNumberDisplay.textContent = `${activeIndex}/${totalSlides}`;
});




    // Get carousel and slide counter elements
    const casitaSlider = document.getElementById('casitaSlider');
    const currentSlide = document.getElementById('currentSlide');
    const totalSlides = document.getElementById('totalSlides');

    // Total number of slides
    totalSlides.textContent = document.querySelectorAll('#casitaSlider .carousel-item').length;

    // Update slide number on slide change
    casitaSlider.addEventListener('slide.bs.carousel', (event) => {
        currentSlide.textContent = event.to + 1; // +1 because event.to is zero-based
    });

















  const positionIndicator = document.getElementById('carouselPosition');
  const carouselElement = document.getElementById('carouselExampleCaptions');
  const items = carouselElement.querySelectorAll('.carousel-item');
  const total = items.length;

  function updatePosition() {
    const activeIndex = Array.from(items).findIndex(item => item.classList.contains('active')) + 1;
    positionIndicator.textContent = `${activeIndex} / ${total}`;
  }

  // Actualiza cuando cambia de slide
  carouselElement.addEventListener('slid.bs.carousel', updatePosition);

  // Inicializa
  updatePosition();
