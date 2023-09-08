//code for log in page
document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      var emailInput = document.getElementById('email');
      var passwordInput = document.getElementById('password');
      
      var email = emailInput.value;
      var password = passwordInput.value;
      
      if (email === 'admin@admin.com' && password === '123456') {
        alert('Login successful');
      } else {
        alert('Incorrect email or password');
      }
    });
  });