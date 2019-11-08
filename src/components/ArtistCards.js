const Deact = require("../libs/deact");
const AlbumButton = require("./AlbumButton");

function ArtistCards() {
  return Deact.create("section", { class: `artist-cards` }, "");
}

module.exports = ArtistCards;