const audio = document.getElementById("source");
const playPauseButton = document.getElementById("playpause");
const seekslider = document.getElementById("seekslider");
const curtimetext = document.getElementById("curtimetext");
const durtimetext = document.getElementById("durtimetext");
let isPlaying = false;

playPauseButton.addEventListener("click", function() {
  if (isPlaying) {
    audio.pause();
    playPauseButton.innerHTML = "PLAY";
  } else {
    audio.play();
    playPauseButton.innerHTML = "PAUSE";
  }
  isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", function() {
  const curtime = parseInt(audio.currentTime, 10);
  const durtime = parseInt(audio.duration, 10);
  curtimetext.innerHTML = formatTime(curtime);
  durtimetext.innerHTML = formatTime(durtime);
  if (!isNaN(durtime) && durtime !== 0) {
    seekslider.max = durtime;
    seekslider.disabled = false;
  }
  seekslider.value = audio.currentTime;
});

seekslider.addEventListener("input", function() {
  audio.currentTime = seekslider.value;
});

function formatTime(secs) {
  const minutes = Math.floor(secs / 60);
  let seconds = secs - (minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

audio.addEventListener("error", function() {
  alert("Error: Unable to load audio file");
});