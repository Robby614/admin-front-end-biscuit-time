const Deact = require("../libs/deact");
const SongCards = require("./SongCards");
const SongForm = require("./SongForm")


function SongPage(id) {
  return Deact.create("article", { class: "songs-page" }, [
    SongForm(id),
    SongCards()
  ]);
}

module.exports = SongPage;