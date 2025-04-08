// This is for those tryna join
// document.getElementById("timestamp").value = new Date().toLocaleString();

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modals on outside click
window.onclick = function (e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};


//Displaying the thank you page
const params = new URLSearchParams(window.location.search);
console.log(params);

// const output = document.getElementById('output');

    console.log(params.get("firstname"));
    console.log(params.get("lastname"));
    // console.log(myInfo.get("ordinance"));
    // console.log(myInfo.get("location"));
    // console.log(myInfo.get("phone"));
    // console.log(myInfo.get("email"));
    // console.log(myInfo.get("date"));
    
    //now to print it in the thanks html file
    document.querySelector("#output").innerHTML = `
  <div class="appointment-summary">
    <h2>Appointment Confirmation</h2>
    <p><strong>Name:</strong> ${params.get("firstname")} ${params.get("lastname")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Phone:</strong> ${params.get("phone")}</p>
    <p><strong>Title:</strong> ${params.get("orgtitle")}</p>
    <p><strong>Company:</strong> ${params.get("organization")}</p>
    <p><strong>Membership:</strong> ${params.get("membership")}</p>
  </div>
`;