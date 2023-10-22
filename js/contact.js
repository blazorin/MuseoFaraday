const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const exhibitionSelect = document.getElementById('exhibition');
const exhibitionMessage = document.getElementById('exhibition-message');
const ticketLink = document.getElementById('ticket-link');
const submitButton = document.getElementById('submit-button');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the selected exhibition
    const selectedExhibition = exhibitionSelect.value;

    // Update the success message with the selected exhibition
    exhibitionMessage.textContent = selectedExhibition;

    // Disable the submit button during form submission
    submitButton.setAttribute('disabled', 'true');

    setTimeout(function () {
        successMessage.classList.remove('hidden');
        submitButton.removeAttribute('disabled');
        
        contactForm.reset();
    }, 1000);
});