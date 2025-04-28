console.log("Welcome to Spotify");

// variable intialisation
let songIndex=1;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let mastersongName = document.getElementById('mastersongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"  Kesariya- Pritam,Arjit Singh",filePath:"songs/31.mp3",coverPath: "cover/cover1.jpg"},
    {songName:"  Pasoori-Shae G.,Ali S.",filePath:"songs/32.mp3",coverPath: "cover/cover2.jpg"},
    {songName:"  Summer High- AP Dhillon",filePath:"songs/33.mp3",coverPath: "cover/cover3.jpg"},
    {songName:"  Heat Waves ",filePath:"songs/34.mp3",coverPath: "cover/cover4.jpg"},
    {songName:"  Running Up that Hill",filePath:"songs/35.mp3",coverPath: "cover/cover5.jpg"},
    {songName:"  Raatan Lambiyaan- Jubin N.,Asees",filePath:"songs/36.mp3",coverPath: "cover/cover6.jpg"},
    {songName:"  Arabic Kuthu-Anirudh R.",filePath:"songs/37.mp3",coverPath: "cover/cover7.jpg"},
    {songName:"  Memories-Maroon 5",filePath:"songs/38.mp3",coverPath: "cover/cover8.jpg"},
    {songName:"  295-Sidhu M.",filePath:"songs/39.mp3",coverPath: "cover/cover9.jpg"},
    {songName:"  Excuses-AP Dhillon",filePath:"songs/40.mp3",coverPath:"cover/cover10.jpg"},
    {songName:"  Excuses-AP Dhillon",filePath:"songs/10.mp3",coverPath:"cover/cover10.jpg"},
    
]

songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.play();
// Play- pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
// Event Listening
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100) ;
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        mastersongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity=1;


})

document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 10;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})
