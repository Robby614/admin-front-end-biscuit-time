const Deact = require("./libs/deact");
const Header = require("./components/Header");
const Button = require("./components/Button");

Deact.render(Header(), document.querySelector('.app'));

const subheader = Deact.create("h2", {}, "Artists");
Deact.render(subheader, document.querySelector(".app"));

Deact.render(Button("purple mushrooms"), document.querySelector('.app'));



