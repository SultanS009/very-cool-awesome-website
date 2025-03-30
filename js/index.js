const audio = document.getElementById('audio');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function setVolume(value) {
    audio.volume = value;
}
