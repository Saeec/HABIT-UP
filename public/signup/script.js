document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const password = form.querySelectorAll("input[type='password']")[0].value;
    const confirmPassword = form.querySelectorAll("input[type='password']")[1].value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Signup successful!");
    // You can send the data to a backend here
    form.reset();
  });
});
