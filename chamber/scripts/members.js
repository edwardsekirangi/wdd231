//In this script, we will use fetch API and the async functions
//to populate an array and display it on the website

//We are getting references to the items we need to work with that are in our HTML
const membersContainer = document.getElementById("members-container");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

console.log("I love batman");
//async function to fetch the members of the json file
async function fetchMembers() {
    //We will later use a try catch error incase of any misherps
    
    const response = await fetch("../data/members.json");

    //We now have the response, we wanna get the data after we have fetched the promise status 
    const data = await response.json();
    console.log(data.name);
    
    
    
}
