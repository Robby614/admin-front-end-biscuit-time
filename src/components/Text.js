const Deact = require("../libs/deact");

const Text = function(text, textColor) {
    return Deact.create("h2", { style: `display: flex; flex-wrap: wrap; text-color: 
    ${textColor}; text-align: center; ` }, text);
};

module.exports = Text;