
// username
const nameInput = document.getElementById("usernameInput");
const saveBtn = document.getElementById("usernameBtn");
const welcome = document.getElementById("welcomeBack")


const greetEl = document.getElementById("greetings");


const namePopUp = document.getElementById("namepopUp");
const nameClose = document.getElementById("name-closepopup")


const usernameInput = localStorage.getItem("username");
    
if (usernameInput) {
        welcome.textContent = `Welcome Back ${usernameInput}`
        namePopUp.style.display = "none"
    } else {
            namePopUp.style.display = "block"
        }



saveBtn.addEventListener("click", () => {
    const userName = nameInput.value.trim();

    if(userName !== "") {
        localStorage.setItem("username", userName);
        namePopUp.style.display = "none";
        nameInput.value = ""
    }
});



// greetings
const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greetEl.textContent = `Good Morning!`;
    } else if (currentHour < 18) {
        greetEl.textContent = `Good Afternoon!`;
    } else {
        greetEl.textContent = `Good Evening!`;
    }

// popup
nameClose.addEventListener("click", ()=>{
    namePopUp.style.display = "none"
})
