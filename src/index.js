const Deact = require("./libs/deact");


function Title(text, textColor) {
    return Deact.create("h1", { style: `background-color: pink; text-color: ${textColor}; text-align: center; font-size: 100px;` }, text);
}
function subTitle(text, textColor) {
    return Deact.create("h6", { style: `background-color: pink; text-color: ${textColor}; text-align: right; font-size: 12px;` }, text);
}

function Header() {
    return Deact.create("header", {}, [
        Title("Biscuit Time!", "black"),
        subTitle("you gotta risk it to get the biscuit", "red"),
    ]);
};

const header = Header();



Deact.render(header, document.querySelector('.app'));
