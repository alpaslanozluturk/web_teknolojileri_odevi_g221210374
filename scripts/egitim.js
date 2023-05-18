var educationData = [
    { 
        school: 'Sakarya Üniversitesi',
        degree: 'Bilgisayar Ve Bilişim Bilimleri Fakültesi Bilgisayar Mühendisliği Bölümü',
        year: '2022'
    },
    { 
        school: 'Doğu Anadolu Gözlem Evi (DAG)',
        degree: 'Elektrik Ve Elektronik Mühendisliği Stajı',
        year: '2021'
    },
    { 
        school: 'Sakarya Üniversitesi',
        degree: 'Mühendislik Fakültesi Elektrik Ve Elektronik Mühendisliği',
        year: '2019-2022'
    },
    { 
        school: 'Erzurum Mehmet Akfi Ersoy Anadolu Lisesi',
        degree: 'Lise Diploması',
        year: '2018'
    }
];


function displayEducation() {
    var educationList = document.getElementById('education-list');

    educationData.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.innerHTML = '<h2>' + item.school + '</h2>' + '<p>' + item.degree + ', ' + item.year + '</p>';
        educationList.appendChild(itemElement);
    });
}

displayEducation();