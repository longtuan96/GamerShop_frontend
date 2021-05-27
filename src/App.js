import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
