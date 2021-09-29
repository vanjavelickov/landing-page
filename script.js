function checkEmail() {
    let emailValue = document.getElementById('email').value;
    let validationDiv = document.getElementById('validation');
    if (!validateEmail(emailValue)) {
        validationDiv.innerHTML = 'Oops! Please check your email';
    } else {
        validationDiv.innerHTML = '';
    }
    return false;

}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}