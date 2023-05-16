var hobbies = ['Yüzmek', 'Gitar Çalmak', 'Bilgisayar Oyunları', 'Tarih Okumak', 'Senaristlik'];

var hobbiesContainer = document.getElementById('hobbies-container');

hobbies.forEach(function(hobby) {
    var hobbyElement = document.createElement('div');
    hobbyElement.className = 'hobby';
    hobbyElement.innerText = hobby;
    hobbiesContainer.appendChild(hobbyElement);
});