// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (event) => {
        if (!emailInput.validity.valid) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Stop form submission
            return false;
        }
        // The form will submit to send.php if validation passes
    });
});