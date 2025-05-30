
// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeFAQ();
    initializeForms();
    initializeScrollEffects();
    initializeNavbarToggle();
});

// FAQ Functionality
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = this.querySelector('.faq-toggle');
            
            // Close all other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherToggle = otherQuestion.querySelector('.faq-toggle');
                    
                    otherAnswer.classList.remove('active');
                    otherToggle.textContent = '+';
                }
            });
            
            // Toggle current FAQ item
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                toggle.textContent = '+';
            } else {
                answer.classList.add('active');
                toggle.textContent = '−';
            }
        });
    });
}

// Form Handling
function initializeForms() {
    // Hero Form
    const heroForm = document.getElementById('heroForm');
    if (heroForm) {
        heroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'Hero');
        });
    }
    
    // Appointment Form
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'Appointment');
        });
    }
    
    // Promo Forms
    const promoForms = document.querySelectorAll('.promo-form form, .health-plan form');
    promoForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'Consultation');
        });
    });
}

// Form Submission Handler
function handleFormSubmission(form, formType) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    const requiredFields = form.querySelectorAll('input[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ef4444';
            field.style.backgroundColor = '#fee2e2';
        } else {
            field.style.borderColor = '#d1d5db';
            field.style.backgroundColor = 'white';
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate mobile number (basic Indian mobile number validation)
    const mobileField = form.querySelector('input[type="tel"]');
    if (mobileField) {
        const mobilePattern = /^[6-9]\d{9}$/;
        if (!mobilePattern.test(mobileField.value.replace(/\D/g, '').slice(-10))) {
            showNotification('Please enter a valid Indian mobile number', 'error');
            mobileField.style.borderColor = '#ef4444';
            mobileField.style.backgroundColor = '#fee2e2';
            return;
        }
    }
    
    // Captcha validation
    const captchaField = form.querySelector('input[placeholder="Captcha"]');
    if (captchaField && captchaField.value !== '1514') {
        showNotification('Please enter the correct captcha', 'error');
        captchaField.style.borderColor = '#ef4444';
        captchaField.style.backgroundColor = '#fee2e2';
        return;
    }
    
    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showNotification(`${formType} booking request submitted successfully! We'll contact you soon.`, 'success');
        
        // Log form data (in real app, this would be sent to server)
        console.log(`${formType} Form Submitted:`, data);
    }, 2000);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 600;
        z-index: 1000;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        transform: translateX(100%);
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }
    
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Scroll Effects
function initializeScrollEffects() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.treatment-card, .feature-item, .testimonial-card, .review-card, .city-card, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Mobile Navbar Toggle (if needed for mobile menu)
function initializeNavbarToggle() {
    // This can be expanded if a mobile hamburger menu is added
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
}

// Button Click Handlers
document.addEventListener('click', function(e) {
    // Handle all "Book Appointment" and consultation buttons
    if (e.target.matches('.btn-primary') && 
        (e.target.textContent.includes('Book') || 
         e.target.textContent.includes('Consultation') ||
         e.target.textContent.includes('Buy Now'))) {
        
        if (e.target.type !== 'submit') {
            e.preventDefault();
            
            // Scroll to the nearest form or show a modal
            const heroForm = document.querySelector('.hero-form');
            if (heroForm) {
                heroForm.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Focus on the first input
                setTimeout(() => {
                    const firstInput = heroForm.querySelector('input');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 500);
            }
        }
    }
    
    // Handle phone number button
    if (e.target.textContent.includes('985-6589-510')) {
        e.preventDefault();
        window.open('tel:+919856589510', '_self');
    }
});

// Input Formatting
document.addEventListener('input', function(e) {
    // Format mobile number inputs
    if (e.target.type === 'tel') {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(-10);
        }
        e.target.value = value;
    }
    
    // Reset field styling on input
    if (e.target.style.borderColor === 'rgb(239, 68, 68)') {
        e.target.style.borderColor = '#d1d5db';
        e.target.style.backgroundColor = 'white';
    }
});

// Add loading states and animations
function addLoadingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        .loading {
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize loading animations
addLoadingAnimation();

// Error handling for forms
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Performance optimization - lazy loading for images if any are added
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();
