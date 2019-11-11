const Deact = require("../libs/deact");
const AlbumCards = require("./AlbumCards");
const AlbumForm = require("./AlbumForm");

function AlbumPage() {
  return Deact.create("article", { class: "albums-page" }, [
    // AlbumForm(),
    AlbumCards()
  ]);
}

module.exports = AlbumPage;