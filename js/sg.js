var audio = document.getElementById("source");
var playPauseButton = document.getElementById("playpause");
var seekslider = document.getElementById("seekslider");
var curtimetext = document.getElementById("curtimetext");
var durtimetext = document.getElementById("durtimetext");
var isPlaying = false;

playPauseButton.addEventListener("click", function () {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = "PLAY";
    } else {
        audio.play();
        playPauseButton.innerHTML = "PAUSE";
    }
    isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", function () {
    var curtime = parseInt(audio.currentTime, 10);
    var durtime = parseInt(audio.duration, 10);
    curtimetext.innerHTML = formatTime(curtime);
    durtimetext.innerHTML = formatTime(durtime);
    if (!isNaN(durtime)) {
        seekslider.max = durtime;
        seekslider.disabled = false;
    }
    seekslider.value = audio.currentTime;
});

seekslider.addEventListener("input", function () {
    audio.currentTime = seekslider.value;
});

function formatTime(secs) {
    var minutes = Math.floor(secs / 60);
    var seconds = secs - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}

// Get the image and audio elements
const image1 = document.getElementById('leftseek');
const image2 = document.getElementById('rightseek');

// Add click event listeners to the images

image1.addEventListener('click', () => {
    // Reverse 10 seconds
    audio.currentTime -= 10;
});

image2.addEventListener('click', () => {
    // Forward 10 seconds
    audio.currentTime += 10;
});


