function toggleClass(elementId, className) {
    var element = document.getElementById(elementId);
    element.classList.toggle(className);
}


function hideElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'none';
}


function showElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = '';
}


window.onload = function() {
    console.log('The page has finished loading.');
}

