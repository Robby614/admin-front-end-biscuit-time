const Deact = require("../libs/deact");
const Button = require("./Button");
const Http = require("../utils/http");

function ArtistForm() {
    function handleSubmit(event) {
        event.preventDefault();

    
    
        const name = document.querySelector(".artist-name").value;
        const recordLabel = document.querySelector(".artist-record-label").value;
        const homeTown = document.querySelector(".artist-home-town").value;
        
        fetch(`http://localhost:8080/api.artists`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                recordLabel: recordLabel,
                homeTown: homeTown,

            })
        })
            .then(response => {
                console.log(artist);
            });
    }
}

module.exports = ArtistForm;