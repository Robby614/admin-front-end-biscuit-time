const Deact = require("../libs/deact");
const MainHeader = require("./Header");

function App() {
  return Deact.create("section", { class: `app-container` }, [
    MainHeader(),
  ]);
}

module.exports = App;