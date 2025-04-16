 // Example JSON for loading programs and events
const programs = [
    { title: "Mentorship Program", description: "Pairing students with academic mentors." },
    { title: "Scholarship Assistance", description: "Helping students apply for educational funding." },
    { title: "Weekend Workshops", description: "Hands-on sessions on tailoring, writing, and more." }
];

const events = [
    { title: "Spring Fundraiser", date: "May 10, 2025" },
    { title: "College Prep Bootcamp", date: "June 1, 2025" },
    { title: "Volunteer Meetup", date: "July 15, 2025" }
];

const programsContainer = document.querySelector('.programs-container');
  programs.forEach(prog => {
    const div = document.createElement('div');
    div.classList.add('program');
    div.innerHTML = `<h3>${prog.title}</h3><p>${prog.description}</p>`;
    programsContainer.appendChild(div);
});

const eventsContainer = document.querySelector('.events-container');
events.forEach(evt => {
    const div = document.createElement('div');
    div.classList.add('event');
    div.innerHTML = `<h3>${evt.title}</h3><p>${evt.date}</p>`;
    eventsContainer.appendChild(div);
});