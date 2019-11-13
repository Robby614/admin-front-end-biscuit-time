const Deact = require("../libs/deact");

function ArtistName(artist) {
    return Deact.create("section", { class: `artist-name`}, 
        artist.name);
}

module.exports = ArtistName;