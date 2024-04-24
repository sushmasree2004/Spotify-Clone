
console.log("Welcome homie");

// INITIALISE THE VARIABLES

let songIndex = 0;
let audioElement = new Audio('11.mp3');
let coverPng = document.getElementById("coverPng");
let masterplay = document.getElementById('masterPlay');
let miniplayer = document.getElementsByClassName('miniplayer');
let coverName = document.getElementById('coverName');
let progressBar = document.getElementById('progressBar');
let songItem = Array.from(document.getElementsByClassName('songItems'));

let songs = [{songName:"Samayamaa",filePath:"11.mp3", cover:"11.jpg"},
            {songName:"Polammey Pilla",filePath:"12.mp3", cover:"12.jpg"},
            {songName:"Oodiyamma",filePath:"13.mp3", cover:"13.jpg"},
            {songName:"Meghalu Lekunda ",filePath:"14.mp3", cover:"14.jpg"},
            {songName:"Chemkila Angelesi",filePath:"15.mp3", cover:"15.jpg"},
            {songName:"Nenu Nuvvantu ",filePath:"16.mp3", cover:"16.jpg"}
]

songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//Handle play/pause
masterplay.addEventListener("click",()=>{
    console.log("clicked");
    coverName.innerHTML = songs[songIndex].songName;
    coverPng.setAttribute("src",songs[songIndex].cover);
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        document.documentElement.style.setProperty('--opacity', '1');

    }

    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        coverPng.style.opacity="0";
        document.documentElement.style.setProperty('--opacity', '0');
        
    }
})

audioElement.addEventListener("timeupdate",()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})
progressBar.addEventListener("change",()=>{
    audioElement.currentTime = (progressBar.value*audioElement.duration)/100;
})

const makeAllplay=()=>{
    
    Array.from(document.getElementsByClassName("miniplayer")).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })

} 


Array.from(document.getElementsByClassName("miniplayer")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeAllplay();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = (songIndex+1)+'.mp3';
        coverName.innerHTML = songs[songIndex].songName;
        if(audioElement.paused || audioElement.currentTime <= 0){
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            document.documentElement.style.setProperty('--opacity', '1');
    
        }
    
        else{
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            coverPng.style.opacity="0";
            document.documentElement.style.setProperty('--opacity', '0');
            
        }
    })
})
document.getElementById('previous').addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=5;
    }
    else{
        songIndex--;
    }
    audioElement.src = (songIndex+1)+'.mp3';
    coverName.innerHTML = songs[songIndex].songName;
    coverPng.setAttribute("src",songs[songIndex].cover);
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    document.documentElement.style.setProperty('--opacity', '1');
})
document.getElementById('next').addEventListener("click",()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex++;
    }
    audioElement.src = (songIndex+1)+'.mp3';
    coverName.innerHTML = songs[songIndex].songName;
    coverPng.setAttribute("src",songs[songIndex].cover);
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    document.documentElement.style.setProperty('--opacity', '1');
})
songItem.forEach((element, i) => {
    const songNameElement = element.querySelector(".songName");
    const playButton = element.querySelector(".miniplayer");
    songNameElement.addEventListener("click", () => {
        makeAllplay(); 
        songIndex = parseInt(playButton.id);
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        coverName.innerHTML = songs[songIndex].songName;
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            document.documentElement.style.setProperty('--opacity', '1');
        } else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            coverPng.style.opacity = "0";
            document.documentElement.style.setProperty('--opacity', '0');
        }
    });
    songNameElement.addEventListener("dblclick", () => {
        if (!audioElement.paused) {
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            coverPng.style.opacity = "0";
            document.documentElement.style.setProperty('--opacity', '0');
        }
    });
});

songItem.forEach((element, i) => {
    const songNameElement = element.querySelector(".songName");
    const playButton = element.querySelector(".miniplayer");
    const songImage = element.querySelector("img");


    songNameElement.addEventListener("click", () => {
        makeAllplay();
        songIndex = parseInt(playButton.id);
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        coverName.innerHTML = songs[songIndex].songName;
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            document.documentElement.style.setProperty('--opacity', '1');
        } else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            coverPng.style.opacity = "0";
            document.documentElement.style.setProperty('--opacity', '0');
        }
    });


    songNameElement.addEventListener("dblclick", () => {
        if (!audioElement.paused) {
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            coverPng.style.opacity = "0";
            document.documentElement.style.setProperty('--opacity', '0');
        }
    });

     songImage.addEventListener("click", () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.src = songs[i].filePath;
            audioElement.play();
            coverName.innerHTML = songs[i].songName;
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            document.documentElement.style.setProperty('--opacity', '1');
        } else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            coverPng.style.opacity = "0";
            document.documentElement.style.setProperty('--opacity', '0');
        }
    });
});
