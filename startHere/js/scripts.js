const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get("first"));
console.log(myInfo.get("last"));
console.log(myInfo.get("ordinance"));
console.log(myInfo.get("location"));
console.log(myInfo.get("phone"));
console.log(myInfo.get("email"));
console.log(myInfo.get("date"));

//now to print it in the thanks html file
document.querySelector("#results").innerHTML = `
<p>Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>`;
