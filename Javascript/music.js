const music = document.getElementById("test");
const musicBtn = document.getElementById("musicBtn");
const icon = musicBtn.querySelector("i");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    icon.classList.replace("fa-play", "fa-pause");
  } else {
    music.pause();
    icon.classList.replace("fa-pause", "fa-play");
  }
});
