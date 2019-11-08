const Deact = require("../libs/deact");

function AlbumCard(album) {
    return Deact.create("section", { class: `album-card` }, [
            Deact.create("h3", { class: `album-card__title`}, album.title), 
            Deact.create ("h3", { class: `album-card__artist`}, album.artist),
            //Deact.create("h3", { class:  `album-card__songs`}, album.songs) 
    ]);
}

module.exports = AlbumCard;