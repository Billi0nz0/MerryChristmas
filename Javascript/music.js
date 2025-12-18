const music = document.getElementById("test");
const button = document.getElementById("musicBtn");

button.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    button.textContent = "⏸ Pause"
  } else {
    music.pause();
    button.textContent = "▶ Play"
  }
});
