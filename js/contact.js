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

    // Refresh the page every 5 seconds
    setTimeout(function() {
        location.reload();
    }, 5000);
});


    




// if (performance.getEntriesByType("navigation")[0].type === "reload") {
//     window.location.href = '../../index.html';
// }




