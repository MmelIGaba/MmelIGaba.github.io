document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".nav").classList.toggle("active");
  });
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch(event.target.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log("Form submitted successfully");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  });
