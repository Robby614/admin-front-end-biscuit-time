const Deact = require("./libs/deact");
const Header = require("./components/Header");
const Button = require("./components/Button");
const SearchButton = require("./components/SearchButton");


Deact.render(AppContainer(), document.querySelector('.app'));

function AppContainer() {
    return Deact.create("section", { class: `app-container` }, [Header()])
};


const subheader = Deact.create("h2", {}, "Artists");
Deact.render(subheader, document.querySelector(".app"));
Deact.render(SearchButton(), document.querySelector('.app'));

