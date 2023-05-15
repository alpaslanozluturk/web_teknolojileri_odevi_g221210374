document.getElementById('login-form').addEventListener('submit', function(e) {
    // Prevent the form from being submitted normally
    e.preventDefault();

    // Get the username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Create a new FormData object
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    // Send a POST request to the PHP page
    fetch('giris.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Check if login was successful
        if (data.trim() === 'success') {
            // Display a welcome message and hide the form
            document.getElementById('message').innerText = 'Welcome ' + username + '!';
            document.getElementById('login-form').style.display = 'none';
        } else {
            // Redirect back to the login page with an error
            window.location.href = 'giris.html?error=true';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});