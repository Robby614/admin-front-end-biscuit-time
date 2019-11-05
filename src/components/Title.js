const Deact = require("../libs/deact");

const Title = function(text, textColor) {
    return Deact.create("h1", { style: `background-color: pink; text-color: 
    ${textColor}; text-align: center; font-size: 100px;` }, text);
};

module.exports = Title;