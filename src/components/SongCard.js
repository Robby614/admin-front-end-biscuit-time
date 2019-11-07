const Deact = require("../libs/deact");

function SongCard(song) {
    return Deact.create("section", { class: `song-card` }, [
            Deact.create("h3", { class: `song-card__name`}, song.name), 
            Deact.create("h3", { class: `song-card__album`}, song.album), 
            
    ]);
}

module.exports = SongCard;