
import React, { Component } from 'react';
import Gantt from './Components/Gantt/gantt';
import './App.css';
import Routing from './Components/routing/routing';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import DisplayGantt from './Components/Gantt/DisplayGantt/displayGantt';


export default function App() {

    return (
        <div>
            <Routing></Routing>
            <br></br>
            {/* <div className="row">
                <div className="col">
                <div style={{height:'300px',width:'50%',backgroundColor:'black'}}></div>
                </div>
                <div className="col"> 
                <div style={{height:'300px',width:'50%'}}>
                
                </div>
                
               
                 </div>
            </div> */}
            <DisplayGantt></DisplayGantt>

        </div>
    );

}


