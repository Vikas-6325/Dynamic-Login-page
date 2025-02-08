// This script dynamically creates the login form and handles its functionality
window.onload = function() {
    // Create form container
    const loginContainer = document.getElementById('login-container');

    // Create form elements dynamically
    const form = document.createElement('form');
    form.id = 'login-form';

    // Create heading
    const heading = document.createElement('h2');
    heading.textContent = 'Login';
    form.appendChild(heading);

    // Create email label and input
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Enter your email';
    form.appendChild(emailInput);

    // Create password label and input
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password:';
    form.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Enter your password';
    form.appendChild(passwordInput);

    // Create login button
    const loginButton = document.createElement('button');
    loginButton.type = 'submit';
    loginButton.textContent = 'Login';
    form.appendChild(loginButton);

    // Append the form to the container
    loginContainer.appendChild(form);

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Basic form validation
        if (email === '' || password === '') {
            alert('Please fill in both email and password.');
            if (email === '') emailInput.style.borderColor = 'red';
            if (password === '') passwordInput.style.borderColor = 'red';
        } else {
            alert(`Email: ${email}\nPassword: ${password}`);
            emailInput.style.borderColor = '';
            passwordInput.style.borderColor = '';
        }
    });
};
