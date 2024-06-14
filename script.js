console.log("srcipt running");




function addQueue(songname_inp, artistname_inp) {

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

   musiclogo.addEventListener("click", ()=>{
      songcard.remove()
   })


}

async function addcard(title_inp, artist_inp) {
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
   // playbtn.classList.add("play-btn-card-hv")

   let playbtnImg = document.createElement('img')
   playbtnImg.src = "images/playcard.svg"
   playbtnImg.alt = "playbtn"
   playbtn.append(playbtnImg)

   let flag = false;
   if (flag == false) {
      addcirc.addEventListener('click', () => {

         addQueue(title_inp, artist_inp);
         flag = true;

      })
   }
   else{
      alert("You Have already added this")
   }
}





addcard('song title', 'song artist')
addQueue('song name', 'artist name')

let player_play = document.getElementById("playbar")
player_play.addEventListener("click",()=>{
   let temp = player_play.src;
   player_play.src = (temp.includes("images/play-bar.svg"))?"images/pause-bar.svg":"images/play-bar.svg"
})

function createarray(){
   
}