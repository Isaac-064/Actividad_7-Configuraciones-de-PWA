document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent form submission
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "Admin" && password === "1234") {
    alert("Login successful!");
    window.location.href = "index.html"; // Redirige a la página index.html
  } else {
    alert("Invalid username or password. Please try again.");
  }
});