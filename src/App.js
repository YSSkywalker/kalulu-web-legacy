import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/molecules/Header'
import Matome from './components/molecules/Matome'
import Footer from './components/molecules/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        {/* <Header /> */}
        <div className="main-body">
            <Route path='/Matome' component={Matome}/>
        </div>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
