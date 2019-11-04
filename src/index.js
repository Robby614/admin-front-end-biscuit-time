const Deact = require("./libs/deact");
const Header = require("./components/Header");
const Button = require("./components/Button");

Deact.render(Header(), document.querySelector('.app'));

Deact.render(Button("purple mushrooms"), document.querySelector('.app'));


