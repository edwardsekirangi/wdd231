fetch("https://edwardsekirangi.github.io/wdd231/chamber/members.json")
  .then(response => response.json())
  .then(data => {
    // Filter for gold or silver members (case-insensitive)
    const eligibleMembers = data.filter(member =>
      ["gold", "silver"].includes(member.membership.toLowerCase())
    );

    // Shuffle the array
    for (let i = eligibleMembers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [eligibleMembers[i], eligibleMembers[j]] = [eligibleMembers[j], eligibleMembers[i]];
    }

    // Pick up to 3 members
    const selected = eligibleMembers.slice(0, 3);

    // Get the spotlight container
    const spotlightContainer = document.getElementById("spotlight-cards");

    // Create and append each card
    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p class="description">${member.description}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership">${member.membership.charAt(0).toUpperCase() + member.membership.slice(1)} Member</p>
      `;

      spotlightContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading member spotlights:", error));
