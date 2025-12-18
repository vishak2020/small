const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

// Background video mute / unmute
const video = document.getElementById("bgVideo");
const muteBtn = document.getElementById("muteBtn");

muteBtn.addEventListener("click", () => {
  // Ensure video is playing after user interaction
  if (video.paused) {
    video.play();
  }

  if (video.muted) {
    video.muted = false;
    muteBtn.textContent = "Mute";
  } else {
    video.muted = true;
    muteBtn.textContent = "Unmute";
  }
});

