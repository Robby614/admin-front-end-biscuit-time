const Deact = require("../libs/deact");

function ArtistCard(artist) {
    return Deact.create("section", { class: `artist-card` }, [
            Deact.create("h3", { class: `artist-card__name`}, artist.name), 
            Deact.create("h3", { class: `artist-card__albums`}, artist.albums), 
            Deact.create("h3", { class: `artist-card__record-label`}, artist.recordLabel),
            Deact.create("h3", { class:  `artist-card__hometown`}, artist.homeTown) 
    ]);
}

module.exports = ArtistCard;



    