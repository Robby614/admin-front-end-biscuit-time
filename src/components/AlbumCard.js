const Deact = require("../libs/deact");
const SongButton = require("./SongButton");

function AlbumCard(album) {
    return Deact.create("section", { class: `album-card` }, [
            Deact.create("h3", { class: `album-card__title`}, album.title), 
            SongButton(album.id)
    ]);
}

module.exports = AlbumCard;