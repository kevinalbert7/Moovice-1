import React, { Component } from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Weekly from './pages/Weekly'
import WeeklyBattle from './pages/WeeklyBattle'
import Popular from './pages/Popular'
import PopularBattle from './pages/PopularBattle'
import Favorites from './pages/Favorites'
import Error404 from './pages/Error404'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Home</h1>
        </div>
    );
  }
}

export default App;