document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('../php/giris.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === 'success') {
            document.getElementById('message').innerText = 'Hoşgeldiniz '+ username + '!';
        } else {
            document.getElementById('message').innerText = 'Giriş bilgilerinizi lütfen kontrol ediniz.';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});