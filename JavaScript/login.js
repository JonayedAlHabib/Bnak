document.getElementById('loginButton').addEventListener('click', function(e) {
  e.preventDefault();

  const mobileNumber = "12345678900";
  const password = "123";

  const mobileValue = document.getElementById('mobile-number').value.trim();
  const passwordValue = document.getElementById('password').value.trim();

  if (mobileNumber === mobileValue && password === passwordValue) {
    window.location.href = "main_page.html";
  } else {
    alert("❌ Wrong input. Please try again!");
  }
});
