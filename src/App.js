import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from "./Components/Index";
import About from './Components/about/About';
import Activity from './Components/Activities'

function App() {
  return (
    <div>   
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/centres-and-activities" component={Activity} />
      </Router>
    </div>
  );
}

export default App;
