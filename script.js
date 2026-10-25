const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  message.className = "";

  if (password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match.";
    message.classList.add("error");
    confirmPassword.focus();
    return;
  }

  message.textContent = "Registration successful!";
  message.classList.add("success");

  form.reset();
});
