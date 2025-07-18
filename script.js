document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Form Submission
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your interest! We will contact you soon.');
            this.reset();
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple Facility Slider
    let currentFacility = 0;
    const facilityItems = document.querySelectorAll('.facility-item');
    
    function showFacility(index) {
        facilityItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }
    
    // Initialize slider
    if (facilityItems.length > 0) {
        // For demo purposes, we're showing all facilities in a grid
        // In a real implementation, you might want a carousel/slider
        facilityItems.forEach(item => {
            item.style.display = 'block';
        });
        
        // Uncomment below for a simple slider implementation
        /*
        showFacility(0);
        
        setInterval(() => {
            currentFacility = (currentFacility + 1) % facilityItems.length;
            showFacility(currentFacility);
        }, 3000);
        */
    }
    
    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }
    
    // Initialize testimonial slider
    if (testimonialItems.length > 0) {
        // For demo purposes, showing all testimonials in a grid
        testimonialItems.forEach(item => {
            item.style.display = 'block';
        });
        
        // Uncomment below for a simple slider implementation
        /*
        showTestimonial(0);
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
            showTestimonial(currentTestimonial);
        }, 5000);
        */
    }
});