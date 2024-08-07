document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const password = document.querySelector('#password');
    const repassword = document.querySelector('#repassword');

    // Password validation
    form.addEventListener('submit', (e) => {
        if (password.value !== repassword.value) {
            alert('Passwords do not match');
            e.preventDefault();
        }
    });

    // Animation effect on form load
    const mainDiv = document.querySelector('.main');
    mainDiv.style.opacity = 0;
    setTimeout(() => {
        mainDiv.style.transition = 'opacity 2s';
        mainDiv.style.opacity = 1;
    }, 100);

    // Adding focus and blur effects on input fields
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.border = '2px solid #0d00c1';
        });

        input.addEventListener('blur', () => {
            input.style.border = '1px solid #ddd';
        });
    });
});
