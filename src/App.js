import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home"
import O_nama from "./components/pages/O_nama";
import Usluge from "./components/pages/Usluge"
import Footer from "./Footer"
import Privatnost from "./components/pages/Privatnost"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/o_nama" exact component={O_nama} />
      <Route path="/usluge" exact component={Usluge} />
      <Route path="/privatnost" exact component={Privatnost} />
      </Switch>
      <Footer id="dno"/>
      </Router>
    </div>
  );
}

export default App;
