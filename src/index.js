import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import  {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MasterclassPage from './pages/MasterclassPage';
import CocktailPage from './pages/CocktailPage';
import ContactusPage from './pages/ContactusPage';
import TeamPage from './pages/TeamPage';

ReactDOM.render(
  <>   
    <Router>
      <Route path ='/' element= {<HomePage />} />
      <Route path ='/masterclass' element= {<MasterclassPage />} />
      <Route path ='/cocktail' element= {<CocktailPage />} />
      <Route path ='/team' element= {<TeamPage />} />
      <Route path ='/contact' element= {<ContactusPage />} />
    </Router>
  </>,
  document.getElementById('root')
);

