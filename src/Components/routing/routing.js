import { react, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useParams, Redirect, useHistory } from "react-router-dom";
import Header from '../Header/header';
// import Gantt from '../Gantt/gantt';
import DisplayGantt from '../Gantt/DisplayGantt/displayGantt';
// import { createBrowserHistory } from 'history';
// export const history = createBrowserHistory({ forceRefresh: true });

import { Provider } from 'react-redux'
export default function Routing() {

    return (
        <>

            <Router>
                <Header></Header>
                <Switch>
                    <Route path='/DisplayGantt/:projectName'>
                        <DisplayGantt />
                    </Route>
                </Switch>

            </Router>
        </>

    );
}