const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (nameInput.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Please enter your name.';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }


    if (emailInput.value.trim() === '') {
        document.getElementById('email-error').textContent = 'Please enter your email.';
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    
    if (feedbackInput.value.trim() === '') {
        document.getElementById('feedback-error').textContent = 'Please provide your feedback.';
        isValid = false;
    } else {
        document.getElementById('feedback-error').textContent = '';
    }

    if (isValid) {
        form.submit();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}