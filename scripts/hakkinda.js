
var apiEndpoint = 'https://your-api-endpoint.com/about';

fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {

        var aboutText = data.aboutText;


        document.getElementById('about-text').innerText = aboutText;
    })
    .catch((error) => {
        console.error('Error:', error);
    });