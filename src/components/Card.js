const Deact = require("../libs/deact");
const Http = require("../utils/http");
const Button = require("./Button");
const ArtistCard = require("./ArtistCard");

function Card() {
    function renderCard() {
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
            onclick: renderCard
            
        },
        "Get Artists"
    );
}

module.exports = Card;