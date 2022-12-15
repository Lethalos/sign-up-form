const submitButton = document.querySelector("#submit-button");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmMessage = document.querySelector("#confirm-message");

submitButton.addEventListener("click", (e) => {
  if (passwordInput.value != confirmPasswordInput.value) {
    confirmMessage.innerText = "Does not match the password";
    e.preventDefault();
  } else {
    confirmMessage.innerText = "";
  }
});
