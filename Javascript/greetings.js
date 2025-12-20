// username
const nameInput = document.getElementById("usernameInput");
const saveBtn = document.getElementById("usernameBtn");
const welcome = document.getElementById("welcomeBack")


const greetEl = document.getElementById("greetings");


const namePopUp = document.getElementById("namepopUp");
const nameClose = document.getElementById("name-closepopup")

const TimeDate = () => {
    const months = [
        "January", 
        "Feburary", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October",
        "November",
        "December" 
    ]

    const now = new Date();


    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    return `${month} ${day}, ${year}`;
}

const TodayDate = document.getElementById("todayDate");

if(TodayDate) {
    TodayDate.textContent = TimeDate();
}
 

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
    } else if (currentHour < 17) {
        greetEl.textContent = `Good Afternoon!`;
    } else {
        greetEl.textContent = `Good Evening!`;
    }

// popup
nameClose.addEventListener("click", ()=>{
    namePopUp.style.display = "none"
})

