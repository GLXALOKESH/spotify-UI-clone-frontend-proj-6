

console.log("srcipt running");
//setting the audio user left playing
let currentaudio = null;
let currentsong = localStorage.getItem("currentsong");
let currenttime = localStorage.getItem("currenttime") || 0;
if (currentsong) {
   currentaudio = new Audio(currentsong);
   currentaudio.currentTime = currenttime;
}
let currentsongname = localStorage.getItem("currentsongname") || " ";
let currentartistname = localStorage.getItem("currentartistname") || " ";

//function to add song in queue

function addQueue(songname_inp, artistname_inp,filename_inp) {

   let songcard = document.createElement('div')
   songcard.classList.add("song-card");
   let container = document.getElementById("queue-cont")
   container.append(songcard)

   let inSongCont = document.createElement("div")
   inSongCont.classList.add("in-song-cont");
   songcard.append(inSongCont)

   let musiclogo = document.createElement("img");
   musiclogo.src = "images/music.svg"
   musiclogo.alt = "music logo"
   inSongCont.append(musiclogo)

   let names = document.createElement('div');
   names.classList.add('names');
   inSongCont.append(names)

   let songname = document.createElement('p');
   songname.innerText = songname_inp;
   names.append(songname);

   let artistname = document.createElement('p')
   artistname.innerText = artistname_inp;
   names.append(artistname)

   let play = document.createElement('img');
   play.src = 'images/play1.svg';
   play.alt = 'play button';
   songcard.append(play);

   musiclogo.addEventListener("click", () => {
      songcard.remove()
   })
//play songs using play button in queue
   play.addEventListener('click',()=>{
      console.log("yes");
      
      if (currentaudio) {
         currentaudio.pause()
      }
      currentaudio = new Audio(`./songs/${filename_inp}`)
      currentaudio.play()
      let player_play = document.getElementById("playbar")
      player_play.src = "images/pause-bar.svg";

      localStorage.setItem("currentsong", `./songs/${filename_inp}`);
      localStorage.setItem("currenttime", currentaudio.currentTime);

      currentaudio.addEventListener('timeupdate', () => {
         localStorage.setItem("currenttime", currentaudio.currentTime);
      });
   })

}

//function to add song cards

async function addcard(title_inp, artist_inp, filename_inp) {
   let container = document.getElementById("playlistCont")

   let card = document.createElement('div')
   card.classList.add("card")
   container.append(card)

   let coverdiv = document.createElement('div')
   coverdiv.classList.add("p-cover-img")
   card.append(coverdiv);

   let coverimg = document.createElement('img')
   coverimg.src = "images/cover.png"
   coverimg.alt = "cover img"
   coverdiv.append(coverimg)

   let addcirc = document.createElement('img')
   addcirc.src = "images/add-circ.svg"
   addcirc.alt = "add"
   coverdiv.append(addcirc)

   let title = document.createElement('p');
   title.classList.add("title")
   card.append(title);
   title.innerText = title_inp

   let artist = document.createElement('p');
   artist.classList.add("artist")
   card.append(artist);
   artist.innerText = artist_inp
   let playbtn = document.createElement('div')
   playbtn.classList.add("play-btn-card")
   card.append(playbtn);

   let playbtnImg = document.createElement('img')
   playbtnImg.src = "images/playcard.svg"
   playbtnImg.alt = "playbtn"
   playbtn.append(playbtnImg)

   //to add songs of card in queue
   let flag = false;
   if (flag == false) {
      addcirc.addEventListener('click', () => {

         addQueue(title_inp, artist_inp,filename_inp);
         flag = true;
         // let que = document.getElementById('queue-cont')
         // localStorage.setItem('queue', que.innerHTML);
      })
   }
   else {
      alert("You Have already added this")
   }

   //to play song if playbutton of song card is pressed

   playbtnImg.addEventListener('click', () => {
      if (currentaudio) {
         currentaudio.pause()
      }
      currentaudio = new Audio(`./songs/${filename_inp}`)
      currentaudio.play()
      let player_play = document.getElementById("playbar")
      player_play.src = "images/pause-bar.svg";

      localStorage.setItem("currentsong", `./songs/${filename_inp}`);
      localStorage.setItem("currenttime", currentaudio.currentTime);

      currentaudio.addEventListener('timeupdate', () => {
         localStorage.setItem("currenttime", currentaudio.currentTime);
      });

      //change playbar song and artist name

      currentsongname = title_inp;
      currentartistname = artist_inp;
      psong.innerText = title_inp
      partist.innerText = artist_inp

      localStorage.setItem('currentsongname',currentsongname)
      localStorage.setItem('currentartistname',currentartistname)

   })
}


 

//functions for playbar

//to play pause audio from playbar

let player_play = document.getElementById("playbar")
player_play.addEventListener("click", () => {
   let temp = player_play.src;
   if (temp.includes("images/play-bar.svg")) {
      player_play.src = "images/pause-bar.svg";
      currentaudio.play()
   }
   else {
      player_play.src = "images/play-bar.svg";
      currentaudio.pause()
   }
})
//change playbar song and artist name(localstorage)

let psong = document.getElementById('psong')
let partist = document.getElementById('partist')
psong.innerText = currentsongname
partist.innerText = currentartistname

//raw from of names data got form arr.js

let names = ['Gajendra Verma- Mann Mera.mp3',
  'Jyoti Nooran - Paon Ki Jutti (Lyrics)(MP3_160K).mp3',
  'KK - Pyaar Ke Pal (Lyrics)(MP3_160K).mp3',
  'Kailash Kher - Teri Deewani (Lyrics)(MP3_160K).mp3',
  'Yuvi - Pyaar (Lyrics)(MP3_160K).mp3',
  'neha kakkar - O Yaara.mp3'];


//function to extract names and artist names from raw names array

function extract(arr) {

   return arr.map(arr => {
      let cleanname = arr.replace(/\(.*\)/g, '').replace('.mp3', '').trim()
      let parts = cleanname.split('-');

      if (parts.length === 2) {
         let song = parts[1];
         let artist = parts[0];
         return { song, artist, filename: arr }
      }
      else {
         return { artist: 'Unknown', song: cleanname, filename: arr };
      }
   })

}
//to add the all the song cards as per the names data

let data = extract(names)
console.log(data);

let i = 0;
for (const songs of data) {
   let sng = data[i].song;
   let art = data[i].artist
   let flname = data[i].filename
   addcard(sng, art, flname);
   i++
}

localStorage.setItem("playingsong", currentaudio)

if (currentaudio) {
   player_play.src = "images/play-bar.svg";
}
currentaudio.addEventListener('timeupdate', () => {
   localStorage.setItem("currenttime", currentaudio.currentTime);
});

let menu = document.getElementById('menu')

menu.addEventListener('click', ()=>{
   let slider = document.getElementById('slider')
   slider.classList.add('slider-come')
})
let cross = document.getElementById('cross');
cross.addEventListener('click',()=>{
   let slider = document.getElementById('slider')
   slider.classList.remove('slider-come').add('slider')
})