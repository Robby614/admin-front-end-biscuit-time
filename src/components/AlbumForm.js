const Deact = require("../libs/deact");
const Button = require("./Button");
const Http = require("../utils/http");

function AlbumForm() {
    function handleSubmit(event) {
        event.preventDefault();

    
    
        const title = document.querySelector(".album-title").value;
        const artist = document.querySelector(".album-artist").value;
                
        fetch(`http://localhost:8080/api/albums`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                artist: artist
            })
        })
            .then(response => {
                console.log(album);
            });
    }
}

module.exports = AlbumForm;