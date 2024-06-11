console.log("srcipt running");


 async function addcard(){
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
    title.innerText = "Song Title"

    let artist = document.createElement('p');
    artist.classList.add("artist")
    card.append(artist);
    artist.innerText = "Song artist"

    let playbtn = document.createElement('div')
    playbtn.classList.add("play-btn-card")
    card.append(playbtn);
    // playbtn.classList.add("play-btn-card-hv")

    let playbtnImg = document.createElement('img')
    playbtnImg.src = "images/playcard.svg"
    playbtnImg.alt = "playbtn"
    playbtn.append(playbtnImg)







    container.insertAdjacentHTML('beforeend', content)
 }

 function addQueue(){
//     <div class="song-card">
//     <div class="in-song-cont">
//         <img src="images/music.svg" alt="">    
//         <div class="names">
//             <p>Song name</p>
//             <p>artist name </p>
//         </div>
//     </div>

    
//     <img src="images/play1.svg" alt="">
// </div>

 }

 
 addcard()

