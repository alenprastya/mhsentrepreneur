import Navbars from "./components/Navbars/Navbars";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HalamanUtama from "./components/Blog/HalamanUtama/HalamanUtama";
import HomeWeb from "./components/HomeWeb/HomeWeb";
import HalamanTotorial from "./components/Blog/Tutorial/HalamanTotorial";
import Shop from "./components/Blog/Shop/Shop";
import HtmlTemplate from "./components/Blog/Shop/HtmlTemplate/HtmlTemplate";
function App() {
  return (
    <div>
      <Router>
        <Navbars />
        <Switch>
          <Route path="/" component={HomeWeb} exact />
          <Route path="/halamanutama" component={HalamanUtama} />
          <Route path="/halamantutorial" component={HalamanTotorial} />
          <Route path="/shop" component={Shop} />
          <Route path="/HtmlTemplate" component={HtmlTemplate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
