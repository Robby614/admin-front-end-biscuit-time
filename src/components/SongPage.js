const Deact = require("../libs/deact");
const SongCards = require("./SongCards");


function SongPage() {
  return Deact.create("article", { class: "songs-page" }, [
    SongCards()
  ]);
}

module.exports = SongPage;