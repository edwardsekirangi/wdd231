//Writing code that displays the text in white 
const textElement = document.getElementById('currentyear');
textElement.textContent = new Date().getFullYear();
textElement.style.color = 'white';

const textElement2 = document.getElementById('lastModified');
textElement2.textContent = `last modified: ${document.lastModified}`;
textElement2.style.color = 'white';