// Smooth scrolling to section links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Form submission handler
    const contactForm = document.querySelector("form");
    const formResponse = document.createElement("p");
    formResponse.style.display = "none";

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);

        // You can customize this part to send the form data to your server or perform any other action.
        // For demonstration, we'll simply display a confirmation message.
        formResponse.textContent = "Message sent successfully!";
        formResponse.style.display = "block";
        contactForm.reset();

        setTimeout(function () {
            formResponse.style.display = "none";
        }, 5000);
    });

    contactForm.appendChild(formResponse);
});
