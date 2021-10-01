function checkEmail() {
    event.preventDefault(); 
    console.log('aa')
    let emailValue = document.getElementById('email').value;
    let validationDiv = document.getElementById('validation');
    if (emailValue !== '') {
        if (!validateEmail(emailValue)) {
            validationDiv.innerHTML = 'Oops! Please check your email';
        } else {
            validationDiv.innerHTML = '';
        }
    } else {
        validationDiv.innerHTML = 'Oops! Please add your email';
    }

    return false;

}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}