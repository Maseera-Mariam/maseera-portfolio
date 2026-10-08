$(document).ready(function () {
    // Mobile navigation using jQuery
    $("#menuBtn").on("click", function () {
        $("#navLinks").slideToggle(200).toggleClass("open");
    });

    // Current year
    $("#year").text(new Date().getFullYear());

    // Contact form validation
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        if (!name || !email || !message) {
            $("#formMessage").text("Please fill in all the fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $("#formMessage").text("Please enter a valid email address.");
            return;
        }

        $("#formMessage").text("Thank you! Your message has been validated successfully.");
        $("#contactForm")[0].reset();
    });
});
