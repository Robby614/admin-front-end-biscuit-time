const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const ArtistCard = require("./ArtistCard");

function ArtistsButton(){
    function renderArtists() {
        Http.getRequest("http://localhost:8080/api/artists", function({ artists }) {
            artists.forEach(artist => {
                Deact.render(
                    ArtistCard(artist),
                    document.querySelector(".artist-cards")
                );
            });
        });
    }


    return Button(
        {
            class: "artists-button",
            onclick: renderArtists,
            style: `border: 2px solid black;`
        },
        "Artists"
    );
    }
module.exports = ArtistsButton;