import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import  {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MasterclassPage from './pages/MasterclassPage';
import CocktailPage from './pages/CocktailPage';
import ContactusPage from './pages/ContactusPage';
import TeamPage from './pages/TeamPage';

import Menu from './pages/components/Menu';
import Footer from './pages/components/Footer';

ReactDOM.render(
  <>  
    <Router>

    <Menu />

      <Route path ='/' component= {HomePage} exact />
      <Route path ='/masterclass' component= {MasterclassPage} />
      <Route path ='/cocktail' component= {CocktailPage} />
      <Route path ='/team' component= {TeamPage} />
      <Route path ='/contact' component= {ContactusPage} />

    <Footer />

    </Router>
  </>,
  document.getElementById('root')
);

