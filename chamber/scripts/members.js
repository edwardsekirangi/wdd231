//In this script, we will use fetch API and the async functions
//to populate an array and display it on the website

//We are getting references to the items we need to work with that are in our HTML
const url = "https://edwardsekirangi.github.io/wdd231/chamber/members.json";
const membersContainer = document.getElementById("members-container");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

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
    members.forEach((member) => {
        //We are now most likely gonna start adding elements to add into the HTML file here in the div element
        card.classList.add("member-card");

        //Add member details to the card
        card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo" />
        <h2>${member.name}</h2>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${["Member", "Silver", "Gold"][member.membership - 1]}</p>
        <p>${member.description}</p>
      `; 
        
        membersContainer.appendChild(card);
    });        
}

// Toggle view between grid and list
gridBtn.addEventListener("click", () => {
    membersContainer.classList.remove("list-view");
    membersContainer.classList.add("grid-view");
  });
  
  listBtn.addEventListener("click", () => {
    membersContainer.classList.remove("grid-view");
    membersContainer.classList.add("list-view");
  });

  
//A call to the function here at the bottom
fetchMembers();