import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import Home from './components/Home/Home'
import Calculatrice from './components/Calculatrice/Calculatrice'
import Pharmacies from './components/Pharmacies/Pharmacies'
import Produits from './components/Produits/Produits'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AppBar>
            <Route exact path="/" component={Home} />
            <Route exact path="/calculatrice" component={Calculatrice} />
            <Route exact path="/pharmacies" component={Pharmacies} />
            <Route exact path="/produits" component={Produits} />
          </AppBar>
        </Router>  
      </div>
    );
  }
}

export default App;
