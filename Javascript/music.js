const music = document.getElementById("test");
const button = document.getElementById("musicBtn");
const icon = button.querySelector("i")

button.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    music.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
});
