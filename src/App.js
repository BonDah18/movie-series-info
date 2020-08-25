import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

import Landing from './Components/home/Landing.js';
import Movie from './Components/home/Movie.js';

import store from './store';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div>
       <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie/:id" component={Movie} />
        <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
