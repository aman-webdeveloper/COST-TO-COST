let currentTestimonialSlide = 0;
const testimonialTrack = document.querySelector('.testimonials-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('testimonialDots');

function createTestimonialDots() {
    if (!dotsContainer || !testimonialCards.length) return;
    
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
    if (!dotsContainer) return;
    
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialSlide);
    });
}

function moveTestimonials(direction) {
    if (!testimonialTrack || !testimonialCards.length) return;
    
    const cardWidth = testimonialCards[0].offsetWidth + 20;
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
    if (!testimonialTrack || !testimonialCards.length) return;
    
    const cardWidth = testimonialCards[0].offsetWidth + 20;
    currentTestimonialSlide = slideIndex;
    const translateX = -currentTestimonialSlide * (cardWidth * 4);
    testimonialTrack.style.transform = `translateX(${translateX}px)`;
    updateTestimonialDots();
}

if (dotsContainer) {
    createTestimonialDots();
    
    setInterval(() => {
        moveTestimonials(1);
    }, 6000);
}
