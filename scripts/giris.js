document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === 'success') {
            document.getElementById('message').innerText = 'Welcome';
        } else {
            document.getElementById('message').innerText = 'Login failed. Try again.';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});