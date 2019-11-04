const Deact = require("../libs/deact");

function Button (content) {
    return Deact.create("button", {}, content);
};

module.exports = Button;
