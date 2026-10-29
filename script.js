
const registerButton = document.querySelector(".event-card button");
const registrationForm = document.getElementById("registration-form");
const eventForm = document.getElementById("eventForm");
const message = document.getElementById("message");

registerButton.addEventListener("click", function () {
    registrationForm.style.display = "block";
    registrationForm.scrollIntoView({ behavior: "smooth" });
});

eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;
    const roll = document.getElementById("studentRoll").value;

    message.textContent =
    "Registration successful! Thank you, " + name + ".";

message.style.display = "block";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Roll Number:", roll);

    eventForm.reset();
});


const searchInput = document.getElementById("searchInput");

const eventCards = document.querySelectorAll(
    ".event-list .event-card"
);

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    eventCards.forEach(function (card) {
        const eventText = card.textContent.toLowerCase();

        if (eventText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

