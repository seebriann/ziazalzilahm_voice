// const audio = document.getElementById("audio");
// const playBtn = document.getElementById("play-btn");
// const cdImage = document.getElementById("cd-image");

// let isPlaying = false;

// playBtn.addEventListener("click", () => {
//   if (isPlaying) {
//     audio.pause();
//     cdImage.classList.remove("spin");
//     playBtn.textContent = "Play";
//   } else {
//     audio.play();
//     cdImage.classList.add("spin");
//     playBtn.textContent = "Pause";
//   }
//   isPlaying = !isPlaying;
// });


const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const cdImage = document.getElementById("cd-image");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    cdImage.classList.remove("spin");
    playBtn.textContent = "Play";
  } else {
    audio.play();
    cdImage.classList.add("spin");
    playBtn.textContent = "Pause";
  }
  isPlaying = !isPlaying;
});

// Tambahan: Saat audio selesai, reset tombol dan animasi
audio.addEventListener("ended", () => {
  isPlaying = false;
  cdImage.classList.remove("spin");
  playBtn.textContent = "Play";
});

