import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import PhotoGallery from './components/pages/PhotoGallery';


function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/PhotoGallery' component={PhotoGallery} />
      </Switch>  
    </Router>
  </>  
  );
}

export default App;
