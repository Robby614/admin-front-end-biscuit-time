const Deact = require("./libs/deact");
const Button = require("./components/Button");
const SearchButton = require("./components/SearchButton");
const ArtistButton = require("./components/ArtistButton");
const App = require("./components/App");

Deact.render(App(), document.querySelector(".app"));


const subheader = Deact.create("h2", {}, "Artists");
Deact.render(subheader, document.querySelector(".app"));
Deact.render(SearchButton(), document.querySelector('.app'));
Deact.render(ArtistButton(), document.querySelector('.app'));

