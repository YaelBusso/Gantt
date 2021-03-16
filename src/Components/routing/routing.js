import { react, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useParams, Redirect, useHistory } from "react-router-dom";
import Header from '../Header/header';
import Gantt from '../Gantt/gantt';
export default function Routing(props) {

    return (
        <>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path='/Gantt/:projectName'>
                        <Gantt />
                    </Route>
                </Switch>

            </Router>


        </>

    );
}