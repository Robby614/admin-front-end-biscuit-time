const Deact = require("../libs/deact");
const AlbumCard = require("./AlbumCard");

function AlbumCards(artist) {
//     const albumCards = Deact.create("section", { class: `album-cards` }, "");
//     artist.albums.forEach( album => {
//             let albumCard =  Deact.create("section", { class: `album-card` }, album.title)
//             albumCards.appendChild(albumCard);
//         }
//     )
//     return albumCards;
// }
    return Deact.create("section", {class: 'album-cards'}, "");}

module.exports = AlbumCards;