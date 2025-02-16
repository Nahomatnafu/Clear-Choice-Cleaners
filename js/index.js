document.addEventListener("DOMContentLoaded", function () {
    // Testimonial Slider
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

    // Auto-slide every 5 seconds (prevents multiple intervals)
    let autoSlide = setInterval(nextTestimonial, slideSpeed);

    // Manual navigation
    nextBtn.addEventListener("click", function () {
        nextTestimonial();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", function () {
        prevTestimonial();
        resetAutoSlide();
    });

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextTestimonial, slideSpeed);
    }

    // Initialize
    showTestimonial(currentIndex);

    // Mobile Navigation Toggle
    const mobileNav = document.getElementById("mobileNav");
    const navLinks = document.querySelectorAll(".mobile-nav a, .desktop-nav a");

    function toggleMobileNav() {
        if (mobileNav.style.right === "0px") {
            mobileNav.style.right = "-100%";
        } else {
            mobileNav.style.right = "0px";
        }
    }

    document.querySelector(".hamburger").addEventListener("click", toggleMobileNav);
    document.querySelector(".close-btn").addEventListener("click", toggleMobileNav);

    // Smooth Scroll with Offset for Fixed Header
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerOffset = 80; // Adjust based on header height
                const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset;

                window.scrollTo({
                    top: sectionPosition,
                    behavior: "smooth"
                });

                // Close mobile nav after clicking a link (only on mobile)
                if (window.innerWidth <= 768) {
                    toggleMobileNav();
                }
            }
        });
    });
});
