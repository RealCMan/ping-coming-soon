const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("span.error")

form.addEventListener('submit', (e) => {
    if (email.value === '') {
        e.preventDefault();
        email.style.border = '1px solid hsl(354, 100%, 66%)'
        emailError.innerText = 'Please enter an email address'
    } else if (email.validity.typeMismatch) {
        e.preventDefault();
        email.style.border = '1px solid hsl(354, 100%, 66%)'
        emailError.innerText = 'Please provide a valid email address'
    }
});