const url2 = "https://edwardsekirangi.github.io/wdd231/chamber/members.json";
const membersDiv = document.querySelector('#members-container2');
console.log('I love batman');

// Async function to fetch and filter members
async function getMembers() {
    try {
        const response1 = await fetch(url2);
        const members2 = await response1.json();

        console.log(members2);

        // Filter for only "gold" members (case-insensitive)
        const goldMembers = members2.filter(member => member.membership.toLowerCase() === "gold");

        displayMembers2(goldMembers);
    } catch (error) {
        console.error("Error fetching or processing members:", error);
    }
}

// Display function
const displayMembers2 = (members2) => {
    membersDiv.innerHTML = ''; // Clear previous content

    members2.forEach((member) => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" />
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membership.charAt(0).toUpperCase() + member.membership.slice(1)}</p>
            <p>${member.description}</p>
        `;

        membersDiv.appendChild(card);
    });
}

getMembers();
