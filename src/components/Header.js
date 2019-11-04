const Deact = require("../libs/deact");
const Title = require("./Title");

function Header() {
    return Deact.create("header", {}, [
        Title("Biscuit Time!", "black"),
    ]);
}

module.exports = Header;