import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import SearchPage from './pages/searchpage/SearchPage.js'
import DetailsPage from './pages/detailspage/DetailsPage';

const App = () => (
      <Router>
        <div className="app">
          <Route exact path='/' component={SearchPage} />
          <Route path="/search" component={SearchPage} />
          <Route path='/movie' component={DetailsPage} />
        </div>
      </Router>
);

export default App;