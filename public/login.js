document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var errorMessage = document.querySelector(".error-message");
  
    // Perform your login validation here
    // Example code for validation:
    if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
      errorMessage.textContent = "Please enter both username and password";
      errorMessage.style.display = "block";
    } else {
      // Clear any previous error messages
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
  
      // Perform login action
      // You can redirect the user to the home page or perform any other actions
      window.location.href = "/home";
    }
  });
  