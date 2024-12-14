document.addEventListener('DOMContentLoaded', () => {
    // Select elements for footer animation and button
    const footerRight = document.querySelector('.footer_in_right');
    const footerLeft = document.querySelector('.footer_in_left');
    const callButton = document.querySelector('.btn-88'); // Select the button
    const callButtonContainer = callButton?.closest('.call-button-container'); // Optional chaining for safety
    const form = document.getElementById('userDetailsForm');
    const successMessage = document.getElementById('successMessage');
    const phoneInput = document.getElementById('phone');
    const countryCodeSelect = document.getElementById('countryCode');
    
    // Define valid phone number lengths for each country code
    const phoneLengthByCountry = {
        '+1': 10,    // USA, Canada
        '+44': 10,   // UK
        '+91': 10,   // India
        '+61': 9,    // Australia
        '+81': 10,   // Japan
        // Add more country codes and phone lengths as needed
    };

    // Function to toggle call options
    function toggleCallOptions() {
        if (callButtonContainer) {
            callButtonContainer.classList.toggle('expanded');
        }
    }

    // Function to check visibility of footer sections
    function checkVisibility() {
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        
        // Check visibility for footer sections
        [footerRight, footerLeft].forEach((element) => {
            if (element) {
                const rect = element.getBoundingClientRect();
                if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
                    element.classList.add('animate');
                }
            }
        });
    }

    // Initial check and scroll listener for visibility
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    // Event listener for the call button
    if (callButton) {
        callButton.addEventListener('click', toggleCallOptions);
    }

    // Form submission handler
    form?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission (page reload)

        const formData = new FormData(form);

        // Submit the form using Fetch API
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            if (data.status === 'success') {
                // Show success message
                successMessage.style.display = 'block';
                
                // Optionally reset the form
                form.reset();
            } else {
                alert('Error: ' + (data.message || 'Something went wrong!'));
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });

    // Phone number validation and formatting
    countryCodeSelect.addEventListener('change', updatePhonePlaceholder);
    phoneInput.addEventListener('input', formatPhoneNumber);
    
    // Initial setup
    updatePhonePlaceholder();

    function updatePhonePlaceholder() {
        const selectedCode = countryCodeSelect.value;
        const validLength = phoneLengthByCountry[selectedCode];

        // Update phone number format message
        const phoneFormatMessage = document.getElementById('phoneFormat');
        const placeholder = `(${selectedCode}) ${'9'.repeat(validLength-5)} - ${'0'.repeat(5)}`;
        phoneFormatMessage.textContent = `Format: ${placeholder}`;
        
        // Set the input max length based on the selected country code
        phoneInput.setAttribute('maxlength', validLength);
    }

    function formatPhoneNumber() {
        let phoneValue = phoneInput.value.replace(/\D/g, ''); // Remove non-numeric characters
        const selectedCode = countryCodeSelect.value;
        const validLength = phoneLengthByCountry[selectedCode];

        if (phoneValue.length > validLength) {
            phoneValue = phoneValue.slice(0, validLength); // Limit to valid length
        }

        // Format the phone number with dashes
        if (phoneValue.length > 5) {
            phoneValue = phoneValue.slice(0, 5) + ' - ' + phoneValue.slice(5, validLength);
        }

        // Reapply the formatted phone number to the input field
        phoneInput.value = phoneValue;
    }
});
