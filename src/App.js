import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from "./Components/Index";
import About from './Components/about/About';
import Activity from './Components/Activities';
import Contact from './Components/contact/Contact'
import  Gallery  from './Components/gallery/Photos'
import Footer from './Components/footer/Footer'
import Publication from './Components/publication/Publication'


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/centres-and-activities" component={Activity} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/publication" component={Publication} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
