function sendMessage() {
    const messageText = document.getElementById("message").value;
    if (messageText === "") return;

    const chatbox = document.getElementById("chatbox");
    const newMessage = document.createElement("p");
    newMessage.textContent = `You: ${messageText}`;
    chatbox.appendChild(newMessage);

    // Example of predefined responses
    const botResponse = getBotResponse(messageText);
    const botMessage = document.createElement("p");
    botMessage.textContent = `TalkPal: ${botResponse}`;
    chatbox.appendChild(botMessage);

    document.getElementById("message").value = "";
}

function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("hello")) {
        return "Hello! How can I assist you?";
    } else if (message.includes("how are you")) {
        return "I'm just a computer program, but thanks for asking!";
    } else if (message.includes("bye")) {
        return "Goodbye! Feel free to return anytime.";
    } else if (message.includes("help")) {
        return "Sure, I can help you with various topics. Just ask a question!";
    } else if (message.includes("who created you")) {
        return "I was created by a developer as part of a project.";
    } else if (message.includes("tell me a joke")) {
        return "Why don't scientists trust atoms? Because they make up everything!";
    } else if (message.includes("weather")) {
        return "I don't have real-time weather data. You can check a weather website or app for that.";
    } else if (message.includes("thanks") || message.includes("thank you")) {
        return "You're welcome!";
    } else if (message.includes("name")) {
        return "I'm Chatbot, your virtual assistant.";
    } else if (message.includes("age")) {
        return "I don't have an age. I'm just a program.";
    } else if (message.includes("good morning")) {
        return "Good morning! How can I assist you today?";
    } else if (message.includes("good afternoon")) {
        return "Good afternoon! What can I help you with?";
    } else if (message.includes("good evening")) {
        return "Good evening! How can I assist you?";
    } else if (message.includes("tell me a fact")) {
        return "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!";
    } else if (message.includes("what's your favorite color")) {
        return "I don't have personal preferences, but I think blue is a nice color!";
    } else if (message.includes("your purpose")) {
        return "My purpose is to assist and engage in conversations with users.";
    } else if (message.includes("how does this work")) {
        return "I respond to the text you type. Ask me questions or chat about various topics!";
    } else if (message.includes("programming languages")) {
        return "There are many programming languages, including JavaScript, Python, and Java.";
    } else {
        return "I'm not sure I understand. Please ask something else.";
    }
}

// Send the message when Enter key is pressed
document.getElementById("message").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});