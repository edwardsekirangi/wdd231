//In this script, we will use fetch API and the async functions
//to populate an array and display it on the website

//We are getting references to the items we need to work with that are in our HTML
const url = "https://edwardsekirangi.github.io/wdd231/chamber/data/discover.json";
const membersContainer = document.getElementById("second-card");
const gridBtn = document.getElementById("grid-view");

console.log("I love batman");
//async function to fetch the members of the json file
async function fetchMembers() {
    //We will later use a try catch error incase of any misherps
    
    const response = await fetch(url);

    //We now have the response, we wanna get the data after we have fetched the promise status 
    const members = await response.json();

    displayMembers(members);
        
}

//We will now create a function called display members that will display the members
const displayMembers = (members) => {
    //Create a for loop to iterate through the items
    membersContainer.innerHTML = ''; // Clear previous content

    members.forEach((member) => {
        //We are now most likely gonna start adding elements to add into the HTML file here in the div element
       
        const card = document.createElement("div");
        card.classList.add("member-case"); // Add class to card
        
        //Add member details to the card
        card.innerHTML = `
        <img src="images/${member.image}" loading="lazy" alt="${member.title} logo" />
        <h2>${member.title}</h2>
        <p><strong>Address:</strong> ${member.address}</p>
        <p>${member.description}</p>
        <a href="https://utb.go.ug/" class="learn-more" target = "blank">Learn more</a>
      `; 
        
        membersContainer.appendChild(card);
    });        
}
//A call to the function here at the bottom
fetchMembers();