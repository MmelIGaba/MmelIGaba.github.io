# mySite
mmeligaba.github.io./



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
</head>
<body>

<form id="contactForm" action="https://formspree.io/your_email_here" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the form data
  const formData = new FormData(event.target);
  
  // Send the form data asynchronously using AJAX
  fetch(event.target.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    // Handle the response if needed
    console.log('Form submitted successfully');
    // You can perform any action here, such as displaying a success message
  })
  .catch(error => {
    console.error('Error submitting the form:', error);
    // You can handle errors here, such as displaying an error message
  });
});
</script>

</body>
</html>
