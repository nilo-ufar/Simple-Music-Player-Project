let audioElem = document.querySelector("audio")

let musicSrc = [
    "media/Zayn-Befour.mp3",
    "media/Zayn-Borderz.mp3",
    "media/Zayn-Bright.mp3"
]

let audioIndex = 0

function timeMinusMusicHandler () {
    audioElem.currentTime -= 5
}

function previousMusicHandler () {
    audioIndex--

    if (audioIndex < 0) {
        audioIndex = 2
    }

    audioElem.setAttribute("src", musicSrc[audioIndex])
    console.log(musicSrc[audioIndex]);
    playHandler()
}

function playHandler () {
    audioElem.play()
    console.log("Played")
}

function pauseHandler () {
    audioElem.pause()
    console.log("Paused")
}

function nextMusicHandler () {
    audioIndex++

    if (audioIndex > musicSrc.length - 1) {
        audioIndex = 0
    }

    audioElem.setAttribute("src", musicSrc[audioIndex])
    console.log(musicSrc[audioIndex]);
    playHandler()
}

function musicSpeedHandler () {
    audioElem.playbackRate = 2
    console.log("Speed 2X")
}

function timePlusMusicHandler () {
    audioElem.currentTime += 5
}