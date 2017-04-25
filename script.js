function Jukebox() {
this.library = [];
this.playSong = playSong;
this.stopSong = stopSong;
this.loadSong = loadSong;
this.pauseSong = pauseSong;
this.playList = playList
} 

var myJukebox = new Jukebox()

function Song(fileName, artist, title) {
this.fileName = fileName
this.artist = artist
this.title = title
myJukebox.library.push(this)
}

var gentleMind = new Song("gentle-mind.mp3", "Billy Bragg and Joe Henry", "Gentle On My Mind")
var louisCollins = new Song("louis-collins.mp3", "Mississippi John Hurt", "Louis Collins Blues")
var yeshe = new Song("yeshe.mp3", "Hezekiah Jones", "Yeshe & Horus")

var songArtist = document.getElementById("artist")
var songTitle = document.getElementById("title")
var playButton = document.getElementsByClassName("play-button")[0]
var pauseButton = document.getElementsByClassName("pause-button")[0]
var nextButton = document.getElementsByClassName("next-button")[0]
var stopButton = document.getElementsByClassName("stop-button")[0]
var jukebox = document.getElementsByClassName("jukebox")[0]
var buttons = document.getElementById("buttonTarget")


function loadSong (song) {
	jukebox.src = song.fileName;

}

var currentSong = 0

jukebox.src = myJukebox.library[currentSong].fileName


playButton.addEventListener("click",playSong)
function playSong() {
	jukebox.play();
	songArtist.innerHTML = myJukebox.library[currentSong].artist
	songTitle.innerHTML = myJukebox.library[currentSong].title

}
pauseButton.addEventListener("click", pauseSong)
function pauseSong() {
	jukebox.pause()
}

nextButton.addEventListener("click", nextSong)
function nextSong() {
	currentSong +=1;
	if (currentSong === myJukebox.library.length){
		currentSong = 0
	} 
	jukebox.src = myJukebox.library[currentSong].fileName;
	songArtist.innerHTML = myJukebox.library[currentSong].artist;
	songTitle.innerHTML = myJukebox.library[currentSong].title;
	jukebox.play();
}


stopButton.addEventListener("click", stopSong)
function stopSong() {
	jukebox.src = myJukebox.library[currentSong].fileName;
	songArtist.innerHTML = "";
	songTitle.innerHTML = "";
}

function playList() {
	// return this.library
}


buttons.addEventListener("mouseover", function (event) {
	event.target.style.cursor = "pointer"
})

document.body.addEventListener("keypress",function (event) {
	if(event.keyCode === 32) {
		playSong()

	}
	
})












// var buttons = document.getElementsByClassName("button")
// for (var i = 0; i < buttons.length; i ++)
// 	buttons[i].addEventListener("click", function() {
// 		if (event.target= buttons[0]){
// 			playSong()
// 			}
// 		if(event.target = buttons[1]){
// 			pauseSong()
// 			}
// 	}

// )
