import { react, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useParams, Redirect, useHistory } from "react-router-dom";
import Header from '../Header/header';
// import Gantt from '../Gantt/gantt';
import DisplayGantt from '../Gantt/displayGantt';
export default function Routing() {

    return (
        <>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path='/DisplayGantt/:projectName'>
                        <DisplayGantt />
                    </Route>
                    {/* <Route path='/Gantt/:projectName'>
                        <Gantt />
                    </Route> */}
                </Switch>

            </Router>


        </>

    );
}