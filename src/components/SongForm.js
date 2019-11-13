const Deact = require("../libs/deact");
const Button = require("./Button");
const Http = require("../utils/http");

function SongForm(id) {
    function handleSubmit(event) {
        event.preventDefault();

         const title = document.querySelector(".album-songs").value;
        
                
        fetch(`http://localhost:8080/api/albums/${id}/add-song`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
            })
        })
        .then(response => {
            return response.json();
        })
        .then(song => {
            console.log(song);
        });
}
    return Deact.create("form", { onsubmit: handleSubmit }, [

    Deact.create(
        "input",
        { class: "album-songs", placeholder: "Song", type: "text" },
        ""
      ),
      Button({ type: "submit" }, "Submit")

      ]);
}

module.exports = SongForm;