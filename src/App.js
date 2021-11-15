import React, { Component } from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import weekly from './pages/weekly'
import weeklyBattle from './pages/weeklyBattle'
import popular from './pages/popular'
import popularBattle from './pages/popularBattle'
import favorites from './pages/favorites'
import Error404 from './pages/Error404'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={weekly}/>
            <Route path="" component={weeklyBattle}/>
            <Route path="" component={popular}/>
            <Route path="" component={popularBattle}/>
            <Route path="" component={favorites}/>
            <Route path="*" component={Error404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;