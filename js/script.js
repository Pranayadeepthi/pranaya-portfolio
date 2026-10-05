document.addEventListener("DOMContentLoaded", function () {
    // 1. Highlight current navigation tab based on URL
    const currentLocation = location.pathname.split("/").pop();
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach((item) => {
        const itemPath = item.getAttribute("href");
        if (itemPath === currentLocation || (currentLocation === "" && itemPath === "index.html")) {
            item.classList.add("active");
        }
    });

    // 2. Client-side Validation for Contact Form
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                formFeedback.style.color = "#dc2626";
                formFeedback.textContent = "Please fill in all required fields.";
                return;
            }

            // Simple email structure test
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formFeedback.style.color = "#dc2626";
                formFeedback.textContent = "Please enter a valid email address.";
                return;
            }

            // Display success status without email dispatcher backend
            formFeedback.style.color = "#16a34a";
            formFeedback.textContent = "Thank you! Your message has been validation-checked and logged.";
            contactForm.reset();
        });
    }
});