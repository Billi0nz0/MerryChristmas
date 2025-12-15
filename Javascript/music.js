const music = document.getElementById("bgMusic");
const button = document.getElementById("musicBtn");

button.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    button.textContent = "⏸ Playing";
  } else {
    music.pause();
    button.textContent = "▶ Play Music";
  }
});

music.volume = 0.3; 