let carouselPositions = {
    clients: 0,
    partners: 0
};

function moveCarousel(carouselName, direction) {
    const carousel = document.getElementById(`${carouselName}Carousel`);
    const track = carousel.querySelector('.carousel-track');
    const items = track.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    const maxPosition = items.length - visibleItems;

    carouselPositions[carouselName] += direction;

    if (carouselPositions[carouselName] < 0) {
        carouselPositions[carouselName] = 0;
    } else if (carouselPositions[carouselName] > maxPosition) {
        carouselPositions[carouselName] = maxPosition;
    }

    const translateX = -carouselPositions[carouselName] * itemWidth;
    track.style.transform = `translateX(${translateX}px)`;
}

function autoSlideCarousels() {
    moveCarousel('clients', 1);
    moveCarousel('partners', 1);
}

setInterval(autoSlideCarousels, 3000);

let currentTestimonialSlide = 0;
const testimonialTrack = document.querySelector('.testimonials-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('testimonialDots');

function createTestimonialDots() {
    const slidesCount = Math.ceil(testimonialCards.length / 4);
    for (let i = 0; i < slidesCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonialSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function updateTestimonialDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialSlide);
    });
}

function moveTestimonials(direction) {
    const cardWidth = testimonialCards[0].offsetWidth + 20;
    const visibleCards = Math.floor(window.innerWidth / cardWidth);
    const slidesCount = Math.ceil(testimonialCards.length / 4);
    
    currentTestimonialSlide += direction;

    if (currentTestimonialSlide < 0) {
        currentTestimonialSlide = slidesCount - 1;
    } else if (currentTestimonialSlide >= slidesCount) {
        currentTestimonialSlide = 0;
    }

    const translateX = -currentTestimonialSlide * (cardWidth * 4);
    testimonialTrack.style.transform = `translateX(${translateX}px)`;
    updateTestimonialDots();
}

function goToTestimonialSlide(slideIndex) {
    const cardWidth = testimonialCards[0].offsetWidth + 20;
    currentTestimonialSlide = slideIndex;
    const translateX = -currentTestimonialSlide * (cardWidth * 4);
    testimonialTrack.style.transform = `translateX(${translateX}px)`;
    updateTestimonialDots();
}

if (dotsContainer) {
    createTestimonialDots();
}

setInterval(() => {
    moveTestimonials(1);
}, 5000);
