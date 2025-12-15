const username = "Champ";

const greetEl = document.getElementById("greetings");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greetEl.textContent = `Good Morning ${username}!`;
} else if (currentHour < 18) {
    greetEl.textContent = `Good Afternoon ${username}!`;
} else {
    greetEl.textContent = `Good Evening ${username}!`;
}

