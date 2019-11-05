const Deact = require("./libs/deact");
const Header = require("./components/Header");
const Button = require("./components/Button");
const SearchButton = require("./components/SearchButton");

Deact.render(Header(), document.querySelector('.app'));

const subheader = Deact.create("h2", {}, "Artists");
Deact.render(subheader, document.querySelector(".app"));
Deact.render(SearchButton(), document.querySelector('.app'));
// const x = document.querySelector("button");
// x.onclick= () => console.log('clicked');







