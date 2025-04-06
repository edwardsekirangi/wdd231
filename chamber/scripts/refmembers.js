//writing java script that extracts data from the json file and displays it to the page
const url2 = "https://edwardsekirangi.github.io/wdd231/chamber/members.json";
const membersDiv = document.querySelector('#members-container2');
console.log('I love batman');

//We now use the async function to extract info from the json file 
async function getMembers() {
    //use the await keyword to get the data
    const response1 = await fetch(url2);

    //It is now time for the data
    const members2 = await response1.json();

    //debugging
    console.log(members2.name);

}