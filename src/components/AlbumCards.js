const Deact = require("../libs/deact");
const AlbumCard = require("./AlbumCard");

function AlbumCards(artist) {
    return Deact.create("section", { class: `album-cards` }, [
       
        artist.albums.forEach(function (album) {
            Deact.render( artist.album,
                document.querySelector(".album-cards")
            );
        })
    ])
}

module.exports = AlbumCards;