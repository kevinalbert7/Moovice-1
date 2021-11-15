import React, { Component } from 'react';

class home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="weekly" component={weekly}/>
                        <Route path="weeklyBattle" component={weeklyBattle}/>
                        <Route path="popular" component={popular}/>
                        <Route path="popularBattle" component={popularBattle}/>
                        <Route path="favorites" component={favorites}/>
                        <Route path="*" component={Error404}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default home;