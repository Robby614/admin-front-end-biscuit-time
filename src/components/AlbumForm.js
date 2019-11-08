const Deact = require("../libs/deact");
const Button = require("./Button");
const Http = require("../utils/http");

function AlbumForm() {
    function handleSubmit(event) {
        event.preventDefault();

    
    
        const name = document.querySelector(".album-name").value;
        const recordLabel = document.querySelector(".album-record-label").value;
        const homeTown = document.querySelector(".album-home-town").value;
        
        fetch(`http://localhost:8080/api.albums`, {
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
                console.log(album);
            });
    }
}

module.exports = AlbumForm;