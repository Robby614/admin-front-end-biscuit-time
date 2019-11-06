const Deact = require("../libs/deact");
const Text = require("./Text");
const Button = require("./Button");

function SearchButton() {
  return Button(
    {
      class: "search-button",
      onclick: () => {
        fetch("http://localhost:8080/api/artists")
          .then(function(response) {
            return response.json();
          })
          .then(function(search) {
            search.forEach(artist => {
              Deact.render(
                Text(artist.name, "red"),
                document.querySelector(".app")
              );
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    "Search"
  );
}

module.exports = SearchButton;