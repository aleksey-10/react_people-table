import React from 'react';

import './App.css';
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { NotFoundPage } from './components/NotFoundPage';
import { Header } from './components/Header';

const App = () => (
  <div className="App grid-container">
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/people/" component={PeoplePage} />
        <Redirect from="/home" to="/" />
        <Route path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>

    </HashRouter>
  </div>
);

export default App;
