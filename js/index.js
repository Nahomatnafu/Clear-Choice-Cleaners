document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const slider = document.querySelector(".testimonial-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;
    const totalTestimonials = testimonials.length;
    const slideSpeed = 5000; // Auto-slide every 5s

    function showTestimonial(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentIndex);
    }

    // Auto-slide every 3 seconds
    setInterval(nextTestimonial, slideSpeed);

    // Manual navigation
    nextBtn.addEventListener("click", nextTestimonial);
    prevBtn.addEventListener("click", prevTestimonial);

    // Initialize
    showTestimonial(currentIndex);
});
