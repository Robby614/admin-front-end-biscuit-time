const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const AlbumCard = require("./AlbumCard");
const AlbumPage = require("./AlbumPage");
const ArtistCard = require("./ArtistCard")

function AlbumsButton() {
    function renderAlbums() {
        document.querySelector(".content .container").innerHTML = "";
        Deact.render(
            AlbumPage(),
            document.querySelector(".content .container")
        );
        Http.getRequest("http://localhost:8080/api/artist/${artist.id}/albums", function (albums) {
            albums.forEach(function (album) {
                Deact.render(
                    AlbumCard(album),
                    document.querySelector(".album-cards")
                );
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