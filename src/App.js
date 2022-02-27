import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/molecules/ScrollToTop'
// import Header from './components/molecules/Header'
import Top from './components/molecules/Top'
import Matome from './components/molecules/Matome'
import Footer from './components/molecules/Footer'
import News from './components/molecules/News'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <ScrollToTop />
      <Route exact path='/' component={Top}/>
      <Route path='/Matome' component={Matome}/>
      <Route path='/News' component={News}/>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
