const Deact = require("../libs/deact");
const AlbumCards = require("./AlbumCards");
const AlbumForm = require("./AlbumForm");
const ArtistName = require("./ArtistName");

function AlbumPage(id, artist) {
  return Deact.create("article", { class: "albums-page" }, [
    AlbumForm(id),
    ArtistName(artist),
    AlbumCards(artist)
  ]);
}

module.exports = AlbumPage;