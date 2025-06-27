document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission

    const email = form.querySelector("input[type='email']").value.trim();
    const password = form.querySelector("input[type='password']").value.trim();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    // Simulate a login process
    console.log("Email:", email);
    console.log("Password:", password);

    // Simulated success message
    alert("Login successful!");
    
    // You can redirect or update UI here
    // window.location.href = "dashboard.html";
  });
});
