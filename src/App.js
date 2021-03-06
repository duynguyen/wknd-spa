/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
// some todo
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import logo from './images/wknd-logo-dk.svg';
import Adventures from './components/Adventures';
import AdventureDetail from './components/AdventureDetail';
import AEMResponsiveGrid from './components/aem/AEMResponsiveGrid';
import AEMTitle from './components/aem/AEMTitle';
import AEMText from './components/aem/AEMText';
import AEMImage from './components/aem/AEMImage';

import './App.scss';

const {  REACT_APP_PUBLIC_URI } = require('./constants');

function App() {

  // const logoUrl = REACT_APP_PUBLIC_URI + logo;

  const history = createBrowserHistory({
    basename: REACT_APP_PUBLIC_URI
  })

  return (
    <Router history={history}>
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="WKND Logo"/>
          <hr />
        </header>
      <Switch>
        <Route path='/adventure:path'>
          <AdventureDetail />
        </Route>  
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>   
  );
}

/***
 * Displays a grid of current adventures
 */
function Home() {
  return (
    <div className="Home">
        <AEMResponsiveGrid
            pagePath='/content/wknd-app/us/en/home' 
            itemPath='root/responsivegrid'/>

        <AEMTitle
            pagePath='/content/wknd-app/us/en/home' 
            itemPath='root/title'/>
      <Adventures />
  </div>
  );
}

export default App;