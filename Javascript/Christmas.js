const christmas = new Date ("2025-12-25");

const popup = document.getElementById("popUp")
const popupImage = document.getElementById("popupImage")
const closeBtn = document.getElementById("closepopup")
const button = document.getElementById("checkButton")

button.addEventListener("click", ()=>{
    
    const today = new Date();
    if (
        today.getDate() === christmas.getDate() &&
        today.getFullYear() === christmas.getFullYear() &&
        today.getMonth() === christmas.getMonth()
    ) {
        popup.button = popupImage
        popup.style.display = "block"
        }
        else {
            button.textContent = "Not Christmas yet!";
        }  
});

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
});

const timer = new Date().getHours();

countdownTimer = () => {
    if(
        timer.getHours - 24
    ) console.log ("Oopsie! 9 days left")
}




