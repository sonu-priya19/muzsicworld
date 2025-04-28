console.log("Welcome to Spotify");

// variable intialisation
let songIndex=1;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let mastersongName = document.getElementById('mastersongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"  Kurchi madathpetti,thamana",filePath:"songs/12.mp3",coverPath: "cover/cover1.jpg"},
    {songName:"  ramuloo ramulaa ,mangli",filePath:"songs/13.mp3",coverPath: "cover/cover2.jpg"},
    {songName:"  oo antava oo antava,indravathi",filePath:"songs/14.mp3",coverPath: "cover/cover3.jpg"},
    {songName:"  buttaboma,arman malik ",filePath:"songs/15.mp3",coverPath: "cover/cover4.jpg"},
    {songName:"  sooseki,shreya",filePath:"songs/16.mp3",coverPath: "cover/cover5.jpg"},
    {songName:"  thalapathy,vijayimmanual",filePath:"songs/17.mp3",coverPath: "cover/cover6.jpg"},
    {songName:"  samajavaragamana,sid sriram",filePath:"songs/18.mp3",coverPath: "cover/cover7.jpg"},
    {songName:"  vathi coming,anirudh",filePath:"songs/19.mp3",coverPath: "cover/cover8.jpg"},
    {songName:"  kuti story,anirudh",filePath:"songs/20.mp3",coverPath: "cover/cover9.jpg"},
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
