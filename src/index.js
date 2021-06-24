import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import  {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MasterclassPage from './pages/MasterclassPage';
import CocktailPage from './pages/CocktailPage';
import BarService from './pages/BarServicePage';
import ContactusPage from './pages/ContactusPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';


// import Menu from './pages/components/Menu';
import MenuTest from './pages/components/MenuTest';
import Footer from './pages/components/Footer';

ReactDOM.render(
  <>  
    <Router>

    <MenuTest />

      <Route path ='/' component= {HomePage} exact />
      <Route path ='/masterclass' component= {MasterclassPage} />
      <Route path ='/cocktail' component= {CocktailPage} />
      <Route path ='/barservices' component= {BarService} />
      <Route path ='/team' component= {TeamPage} />
      <Route path ='/contact' component= {ContactusPage} />
      <Route path ='/gallery' component= {GalleryPage} />

    <Footer />

    </Router>
  </>,
  document.getElementById('root')
);

