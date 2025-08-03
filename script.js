// Wait until the document is fully loaded before running
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the button
    document.getElementById("exploreBtn").addEventListener("click", function() {
        // Scroll smoothly to the services section
        document.getElementById("services").scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Booking form submission logic
document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display booking confirmation
    alert(`Thank you, ${name}! Your booking for ${service} on ${date} at ${time} has been confirmed.`);
    
    // Optionally clear the form
    document.getElementById("booking-form").reset();
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Chatbot functionality
function openChat() {
    document.getElementById("chatbot").style.display = "block";
}

function closeChat() {
    document.getElementById("chatbot").style.display = "none";
}

function sendMessage() {
    let userMessage = document.getElementById("userMessage").value;
    let chatbotContent = document.querySelector(".chatbot-content");
    
    // Add user message to chatbot
    let newMessage = document.createElement("p");
    newMessage.textContent = `You: ${userMessage}`;
    chatbotContent.appendChild(newMessage);

    // Simulate chatbot response
    let botMessage = document.createElement("p");
    botMessage.textContent = `Chatbot: Thank you for your message!`;
    chatbotContent.appendChild(botMessage);

    // Clear input field and scroll to the bottom
    document.getElementById("userMessage").value = "";
    chatbotContent.scrollTop = chatbotContent.scrollHeight;
}

