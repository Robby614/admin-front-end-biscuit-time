const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const AlbumCard = require("./AlbumCard");
const AlbumPage = require("./AlbumPage");
const ArtistCard = require("./ArtistCard")

function AlbumsButton(id) {
    function renderAlbums() {
        document.querySelector(".content .container").innerHTML = "";
        Deact.render(
            AlbumPage(id),
            document.querySelector(".content .container")
        );
        Http.getRequest(`http://localhost:8080/api/artists/${id}`,
         function (artist) {
             Deact.render(
                 artist.name,
                 document.querySelector(".album-cards")
             );
            artist.albums.forEach(function (album) {
                Deact.render(
                    AlbumCard(album),
                    document.querySelector(".album-cards")
                );
                console.log(artist.name);
            });
        });
    }

    return Button(
        {
            class: "albums-button",
            onclick: renderAlbums,
            style: `border: 2px solid black;`
        },
        "Albums"
    );
}
module.exports = AlbumsButton;