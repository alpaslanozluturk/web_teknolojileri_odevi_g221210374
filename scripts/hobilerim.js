var hobbies = ['swimming' , 'gaming', 'reading history'];
var hobbiesTR=['yüzmek' ,'bilgisayar oyunları','tarih okumak']

const apiKey = 'EjHEKkpXng3q3cdlcGpx7BhfuYZHSTcBtyvTXr8A3IRNVVTiiywSs9B9';

window.onload = function() {
    hobbies.forEach((hobby, index) => {
      const hobbySection = document.createElement('div');
  
      const button = document.createElement('button');
      button.innerHTML = hobbiesTR[index];
      button.id = `btn${index+1}`;
      hobbySection.appendChild(button);
  
      const img = document.createElement('img');
      img.id = `img${index+1}`;
      hobbySection.appendChild(img);
  
      document.getElementById('hobby-container').appendChild(hobbySection);
  
      button.addEventListener('click', () => {
        fetch(`https://api.pexels.com/v1/search?query=${hobby}&per_page=1&page=`+Math.ceil(Math.random() * 10), {
          headers: {
            Authorization: apiKey
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data.photos.length > 0) {
            const img = document.getElementById(`img${index+1}`);
            img.src = data.photos[0].src.original;
            img.style.display = 'block'; // Show image when loaded
          } else {
            console.log('No photos found for this hobby');
          }
        })
        .catch(error => console.log('Error:', error));
      });
    });
};
