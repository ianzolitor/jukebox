var myJukebox = new Jukebox()

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
var buttons = document.getElementsByClassName("button")
var songImage = document.getElementsByClassName("song-image")[0]
var songButtons = document.getElementsByClassName("click-play")
var skynyrd = document.getElementsByClassName("skynyrd")[0]
var songClick1 = document.getElementsByClassName("click-play")[1]
var songClick2 = document.getElementsByClassName("click-play")[2]

myJukebox.loadSong(gentleMind)
myJukebox.loadSong(louisCollins)
myJukebox.loadSong(yeshe)

var currentSong = 0

jukebox.src = myJukebox.library[currentSong].fileName
songArtist.innerHTML = myJukebox.library[currentSong].artist
songTitle.innerHTML = myJukebox.library[currentSong].title
songClick1.innerHTML = "Click to Play " + myJukebox.library[currentSong +1].title
songClick2.innerHTML = "Click to Play " + myJukebox.library[currentSong +2].title

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
	if(currentSong === 1){
	songClick1.innerHTML = "Click to Play " + myJukebox.library[2].title
	songClick2.innerHTML = "Click to Play " + myJukebox.library[0].title	
	}
	else if(currentSong === 2){
	songClick1.innerHTML = "Click to Play " + myJukebox.library[0].title
	songClick2.innerHTML = "Click to Play " + myJukebox.library[1].title	
	}
	else if(currentSong === 0){
	songClick1.innerHTML = "Click to Play " + myJukebox.library[1].title
	songClick2.innerHTML = "Click to Play " + myJukebox.library[2].title	
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
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseover", function (event) {
	event.target.style.cursor = "pointer"
})
}


document.body.addEventListener("keypress",function (event) {
	if(event.keyCode === 32) {
		playSong()
	}
})

document.body.addEventListener("keypress",function (event) {
	if(event.keyCode === 80) {
		pauseSong()
	}
})

document.body.addEventListener("keypress",function (event) {
	if(event.keyCode === 78) {
		nextSong()
	}
})

for (var i = 0; i < songButtons.length; i++) {
	songButtons[i].addEventListener("mouseover", function (event) {
	event.target.style.cursor = "pointer"
})
}
songClick1.addEventListener("click", nextSong)
songClick2.addEventListener("click", function (event){
	currentSong +=1
	if (currentSong === myJukebox.library.length){
		currentSong = 0
	}
	nextSong()
})

skynyrd.addEventListener("click", function (event){
	alert("Lynryd Skynyrd is NOT ALLOWED!")
})

function Jukebox() {
this.library = [];
this.playSong = playSong;
this.stopSong = stopSong;
this.loadSong = loadSong;
this.pauseSong = pauseSong;

function loadSong (song) {
	this.library.push(song)
	}
} 

function Song(fileName, artist, title) {
this.fileName = fileName
this.artist = artist
this.title = title
}

