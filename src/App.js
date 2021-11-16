import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Home from './pages/Home'
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
      <BrowserRouter>
      <div className="row m-3">
          <nav>
              <ul>
                  <li><Link to="/Home">home</Link></li>
                  <li><Link to="/weekly">weekly</Link></li>
                  <li><Link to="/WeeklyBattle">weeklyBattle</Link></li>
                  <li><Link to="/Popular">popular</Link></li>
                  <li><Link to="/PopularBattle">popularBattle</Link></li>
                  <li><Link to="/Favorites">favorites</Link></li>
                  <li><Link to="/Error404">Error404</Link></li>
              </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Weekly" component={Weekly}/>
            <Route path="/WeeklyBattle" component={WeeklyBattle}/>
            <Route path="/Popular" component={Popular}/>
            <Route path="/PopularBattle" component={PopularBattle}/>
            <Route path="/Favorites" component={Favorites}/>
            <Route path="*" component={Error404}/>
          </Switch>
      </div>
  </BrowserRouter>
    );
  }
}

export default App;