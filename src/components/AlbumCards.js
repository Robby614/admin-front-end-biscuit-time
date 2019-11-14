const Deact = require("../libs/deact");
const AlbumCard = require("./AlbumCard");
const SongButton = require("./SongButton");

function AlbumCards(artist) {
    const albumCards = Deact.create("section", { class: `album-cards` }, "");
    artist.albums.forEach( album => {
            let albumCard =  Deact.create("section", { class: `album-card` }, [
                Deact.create("h3", { class: `album-card__title`}, album.title), 
                SongButton(album.id)
        ])
            albumCards.appendChild(albumCard);
        }
    )
    return albumCards;
}


module.exports = AlbumCards;