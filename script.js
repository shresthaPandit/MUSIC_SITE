let audioElement= new Audio("richflex.mpeg");
// audioElement.play;
let songIndex=0;
let masterPlay=document.getElementById('masterplay');
let forward=document.getElementById('forward');
let backward=document.getElementById('backward');
let processBar=document.getElementById('progressbar');
let songName=document.getElementById('songname')

let songs=[{song:"MONEY TREES",filepath:"moenytrees.mpeg",coverpath:"moneytrees.jpg"},
{song:"NO ROLE MODELZ",filepath:"norolemodelz.mpeg",coverpath:"norole.jpg"},
{song:"HURTLESS",filepath:"hurtless.mpeg",coverpath:"hurtless.jpg"},
{song:"RICH FLEX",filepath:"richflex.mpeg",coverpath:"richflex.jpg"},
{song:"FE!N",filepath:"fein.mpeg",coverpath:"fein.jpg"}]

processBar.value = 0;



masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play')
    }
});
audioElement.addEventListener("timeupdate",()=>{
    const currentTime = audioElement.currentTime;
    const duration = audioElement.duration;
    const percentage = (currentTime / duration) * 100;

    // Update the value of the input range element
    processBar.value = percentage;
})
processBar.addEventListener('change',()=>{
audioElement.currentTime=processBar.value * audioElement.duration/100; 

})




Array.from(document.getElementsByTagName('span')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index=e.target.id;
        audioElement.src=index;
        audioElement.currentTime= 0
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')
    
        
        console.log(e.target);
    });
});

// Function to play a specific song by index
function playSongByIndex(index) {
    const song = songs[index];
    audioElement.src = song.filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    songIndex = index;
    songName.textContent = song.song; // Update the song title
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
}

// Add event listeners for song names
Array.from(document.getElementsByTagName('span')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        index = e.target.getAttribute('data-index'); // Get the index from the data attribute
        playSongByIndex(index); // Play the selected song
    });
});


// Function to play the next song
function playNextSong() {
    songIndex = (songIndex + 1) % songs.length; // Ensure looping to the first song after the last one
    playCurrentSong();
}

// Function to play the previous song
function playPreviousSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Ensure looping to the last song after the first one
    playCurrentSong();
}

// Add event listeners for the forward and backward buttons
forward.addEventListener('click', playNextSong);
backward.addEventListener('click', playPreviousSong);

// Call playCurrentSong to start with the initial song
playCurrentSong();



// ... Your previous code ...

// Function to play the next song
function playNextSong() {
    songIndex = (songIndex + 1) % songs.length; // Ensure looping to the first song after the last one
    playSongByIndex(songIndex); // Update the title and play the next song
}

// Function to play the previous song
function playPreviousSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Ensure looping to the last song after the first one
    playSongByIndex(songIndex); // Update the title and play the previous song
}

// ... The rest of your code ...
