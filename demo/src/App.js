import "./App.css";
import HeaderTop from "./Companents/HeaderTop";
import { Routes, Route } from "react-router-dom";
import Header from "./Companents/Header";
import About from "./Pages/About";
import Catalog from "./Companents/Catalog";
import HomePage from "./Pages/HomePage";
import Result from "./Pages/Result";
import Registration from "./Pages/Registration";
import { connect } from "react-redux";
import Description from "./Pages/Description";
import Location from "./Pages/Location";
import Basket from "./Pages/Basket";
function App(props) {
  // console.log(props);
  return (
    <div>
      {/* <Start /> */}
      {/* <Start1 /> */}
      {/* <Start3 /> */}
      <div className="App">
        <Header />
        <div className="homeBody">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/category/:category" element={<Result />} />
            <Route path="/category/:category/:brand" element={<Result />} />
            <Route path="/description/:id" element={<Description />} />
            <Route path="/location" element={<Location />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(App);
