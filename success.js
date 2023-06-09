// Retrieve the email value from the query parameter in the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get("email");

// Update the content of the successfulUser element
let successfulUser = document.getElementById("successful-user");
successfulUser.textContent = email;
