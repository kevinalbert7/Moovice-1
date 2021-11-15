import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Weekly">weekly</Link>
                                <Link to="/WeeklyBattle">weeklyBattle</Link>
                                <Link to="/Popular">popular</Link>
                                <Link to="/PopularBattle">popularBattle</Link>
                                <Link to="/Favorites">favorites</Link>
                                <Link to="/Error404">Error404</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="Weekly" component={weekly}/>
                        <Route path="WeeklyBattle" component={weeklyBattle}/>
                        <Route path="Popular" component={popular}/>
                        <Route path="PopularBattle" component={popularBattle}/>
                        <Route path="Favorites" component={favorites}/>
                        <Route path="*" component={Error404}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default home;