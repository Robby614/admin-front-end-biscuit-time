const Deact = require("../libs/deact");
const Header = require("./Header");

function App() {
  return Deact.create("section", { class: `app-container` }, [
    Header(),
  ]);
}

module.exports = App;