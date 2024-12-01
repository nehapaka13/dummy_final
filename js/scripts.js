document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dots input');
    
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active');

            if (index === currentIndex) {
                item.classList.add('active');
            }
        });

        // Update the checked dot
        dots[currentIndex].checked = true; 
    }

    function goToNextSlide() {
        currentIndex++;
        if (currentIndex === totalItems) {
            currentIndex = 0; // Reset to first slide after the last one
        }
        updateCarousel();
    }
    
    let autoSlide = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseover', () => {
        clearInterval(autoSlide); // Stop auto-slide on mouseover
    });

    carousel.addEventListener('mouseout', () => {
        autoSlide = setInterval(goToNextSlide, 3000); // Restart auto-slide
    });

    // Initial call to set the first item visible
    updateCarousel();
});



document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.content-image-section');
    const contentImageGrid = document.querySelector('.content-image-grid');

    function checkVisibility() {
        const sectionRect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (sectionRect.top < viewportHeight && sectionRect.bottom >= 0) {
            contentImageGrid.classList.add('animate');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
});

//new section 1
document.addEventListener('DOMContentLoaded', function() {
    const additionalSection = document.querySelector('.additional-section');
    
    function checkVisibility() {
        const sectionRect = additionalSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Trigger when the section enters 60% of the viewport
        const threshold = viewportHeight * 0.6;

        if (sectionRect.top < threshold && sectionRect.bottom >= 0) {
            additionalSection.classList.add('animate');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
});



document.addEventListener('DOMContentLoaded', function() {
    const additionalSection = document.querySelector('.additional-section');

    function checkVisibility() {
        const additionalSectionRect = additionalSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (additionalSectionRect.top < viewportHeight && additionalSectionRect.bottom >= 0) {
            additionalSection.classList.add('animate');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
});





document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.triangle-images-section');

    function checkVisibility() {
        const rect = section.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        const offset = viewHeight * 0.75; // 75% of viewport height

        // Check if the section is at least 75% visible in the viewport
        if (rect.top <= offset && rect.bottom >= offset) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});






document.addEventListener('DOMContentLoaded', () => {
    const footerRight = document.querySelector('.footer_in_right');
    const footerLeft = document.querySelector('.footer_in_left');
    const callButton = document.querySelector('.btn-88'); // Select your button
    const callButtonContainer = callButton.closest('.call-button-container'); // Get the container

    // Function to toggle call options
    function toggleCallOptions() {
        callButtonContainer.classList.toggle('expanded');
    }

    function checkVisibility() {
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        
        // Check if .footer_in_right is in view
        const rightRect = footerRight.getBoundingClientRect();
        if (!(rightRect.bottom < 0 || rightRect.top - viewHeight >= 0)) {
            footerRight.classList.add('animate');
        }

        // Check if .footer_in_left is in view
        const leftRect = footerLeft.getBoundingClientRect();
        if (!(leftRect.bottom < 0 || leftRect.top - viewHeight >= 0)) {
            footerLeft.classList.add('animate');
        }
    }

    // Initial check
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);

    // Toggle call options on button click
    callButton.addEventListener('click', toggleCallOptions);
});




// if (performance.getEntriesByType("navigation")[0].type === "reload") {
//     window.location.href = '../../index.html';
// }



