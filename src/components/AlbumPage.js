const Deact = require("../libs/deact");
const AlbumCards = require("./AlbumCards");
const AlbumForm = require("./AlbumForm");

function AlbumPage(id) {
  return Deact.create("article", { class: "albums-page" }, [
    AlbumForm(id),
    AlbumCards()
  ]);
}

module.exports = AlbumPage;