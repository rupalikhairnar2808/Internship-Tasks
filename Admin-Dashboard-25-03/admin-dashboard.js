// Check if user is authenticated
if (localStorage.getItem("isAuthenticated") !== "true") {
    window.location.href = "login.html"; // Redirect to login if not authenticated
}

// Handle logout
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "login.html"; // Redirect to login page after logout
});
