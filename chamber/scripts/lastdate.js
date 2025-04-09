// Get the last visit time from localStorage
let lastVisit = localStorage.getItem('lastVisit');
let message = '';

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const now = Date.now();
  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.floor((now - lastVisit) / oneDay);
  
  if (diffDays < 1) {
    message = "Back so soon! Awesome!";
  } else {
    // Use singular or plural based on the result
    message = `You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`;
  }
}
// Display the message in the designated sidebar or overlay.
document.querySelector('.visit-message').textContent = message;

// Update the localStorage with the current visit timestamp
localStorage.setItem('lastVisit', Date.now());
