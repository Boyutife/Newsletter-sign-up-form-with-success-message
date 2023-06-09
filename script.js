// Here I creat a function to validate the email
function validateEmail(email) {
  // I got the regex online
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


function validateAndSubmit(event) {
  event.preventDefault();
  let inputEmail = document.getElementById("email-input")
  let email = inputEmail.value
  if (validateEmail(email)) {
    // this is to move to another html that display success 
    // window.location.href= "success.html"
    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
    // since i needed the email at the other end i had to use the above code
  } else {
    let message = "Valid email required"
    let errorMsg = document.getElementById("error-msg");
    errorMsg.textContent = message;
    inputEmail.style.backgroundColor = " hsla(4, 100%,67% , .1)"
    inputEmail.style.borderColor = "hsl(4, 100%, 67%)"
  }
}




