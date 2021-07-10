import Navbars from "./components/Navbars/Navbars";
import "./App.css";
import Home from "./components/Home/Home";
import Layanan from "./components/Layanan/Layanan";
import Portfolio from "./components/Portfolio/Portfolio";
// import Footers from "./components/Footers/Footers";
import Ft from "./components/Footers/Ft";
// import Ports from "./components/Portfolio/Ports";

function App() {
  return (
    <div>
      <Navbars />
      <Home />
      <Layanan />
      <Portfolio />
      <Ft />
    </div>
  );
}

export default App;
