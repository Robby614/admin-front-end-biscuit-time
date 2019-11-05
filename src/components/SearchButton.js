const Deact = require("../libs/deact");
const AppTitle = require("./Title");
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
                AppTitle(artist.name, "red"),
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