document.addEventListener('DOMContentLoaded', () => {
    // Select the containers you want to animate
    const xContainer = document.querySelector('.x_container');
    const yContainer = document.querySelector('.y_container');

    // Array of containers to observe
    const containers = [xContainer, yContainer];

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // Viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback function for Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes when container is in view
                entry.target.classList.add('animate-fadeInSlideUp');
                
                // Apply zoom-in animation to images inside the containers
                entry.target.querySelectorAll('img').forEach(img => img.classList.add('animate-zoomIn'));
                
                // Stop observing once animation is applied
                observer.unobserve(entry.target);
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Initialize with hidden state
    containers.forEach(container => {
        container.classList.add('hidden');
        observer.observe(container);
    });
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





