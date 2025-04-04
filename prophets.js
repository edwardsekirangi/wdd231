//We wanna use the async and await functions to create asynchronous programs
// first we declare a variable that will store the code from our JSON file

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//and now this is the code for the card, to reference us to the card from our HTML
const card = document.querySelector('#cards');

//We then create the async function that will call the fetch function using the await keyword 
async function getProphetData() {
    //Declare a variable to store the await response
    const response = await fetch(url);

    //We now have the response, we wanna get the data after we have fetched the promise status 
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);

}

//We now define a function named displayProphets, that handles a single parameter named prophets
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        //Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        //And now we build the image portrait setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name}, {prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}
getProphetData()