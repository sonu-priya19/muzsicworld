console.log("Welcome to Spotify");

// variable intialisation
let songIndex=1;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let mastersongName = document.getElementById('mastersongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"  oh my friend,karthik",filePath:"songs/1.mp3",coverPath: "cover/cover1.jpg"},
    {songName:"  sakiye,arjun",filePath:"songs/2.mp3",coverPath: "cover/cover2.jpg"},
    {songName:"  sanjana i love u,naveen",filePath:"songs/3.mp3",coverPath: "cover/cover3.jpg"},
    {songName:"  nanu novu,harikrishna ",filePath:"songs/4.mp3",coverPath: "cover/cover4.jpg"},
    {songName:"  helalu hodare,kicha",filePath:"songs/5.mp3",coverPath: "cover/cover5.jpg"},
    {songName:"  devare,vasuki ",filePath:"songs/6.mp3",coverPath: "cover/cover6.jpg"},
    {songName:"  madya ratri li,hamsalekha",filePath:"songs/7.mp3",coverPath: "cover/cover7.jpg"},
    {songName:"  modala kavthe,vp",filePath:"songs/8.mp3",coverPath: "cover/cover8.jpg"},
    {songName:"  sona sona arman",filePath:"songs/9.mp3",coverPath: "cover/cover9.jpg"},
    {songName:"  brundavana",filePath:"songs/10.mp3",coverPath:"cover/cover10.jpg"},
    {songName:"  enne soda rajeshkrishna",filePath:"songs/11.mp3",coverPath:"cover/cover11.jpg"},
    
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
