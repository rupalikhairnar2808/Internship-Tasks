document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials
    const correctEmail = "admin@example.com";
    const correctPassword = "password123";
    
    if (email === correctEmail && password === correctPassword) {
        // Store login status in localStorage
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "admin-dashboard.html"; // Redirect to Admin Dashboard
    } else {
        document.getElementById('error-message').innerText = "Invalid credentials, please try again.";
    }
});
