// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom"
// import TimeLine from "react-gantt-timeline";
// import workspaces from './workspace.json'
// import './gantt.css'
// import { useParams } from "react-router";
// import moment from 'moment';

// export default function Gantt(props) {
//     // debugger
//     // const projectName = useParams()
//     // console.log(projectName);

//     // debugger

//     // const allWorkspace = { workspaces };
//     // const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;

//     // const theCards = []
//     // const theTasks = []

//     // allTheWorkspaces.map((item, index) => {
//     //     {

//     //         item.name === projectName.projectName ? item.cards.map((item, index) => {
//     //             { theCards.push(item); }
//     //         })
//     //             : console.log("bed", item.cards);
//     //     }
//     // })
//     // console.log("now", theCards);

//     // {
//     //     theCards ? theCards.map((item, index) => {
//     //         item.tasks.map((item, index) => {
//     //             console.log("oooooooppppppp", item);
//     //             theTasks.push(item)
//     //         })
//     //     }) : theTasks.push(null)

//     // }

//     // console.log("oo", theCards);


//     // debugger
//     // console.log("the cards", theCards);
//     // console.log("the tasks", theTasks);

//     // theTasks.map((item, index) => {
//     //     item.start = moment(item.start, "MM-DD-YYYY").toDate();
//     //     item.end = moment(item.end, "MM-DD-YYYY").toDate();
//     // })
//     // console.log(theTasks);
//     return (
//         <>
//             {/* <div className="row">
//                 <div className="col-2"></div>
//                 <div className="col-1 Card">
//                     <div className="row nav">The Cards</div>
//                     {theCards ?

//                         theCards.map((item) =>
//                             <>
//                                 <hr></hr>
//                                 <h1 className="cradsName">{item.name}</h1>
//                             </>

//                         ) : <h1 className="Card">no cards</h1>}
//                 </div>
//                 <div className="col-4">
//                     < div className="time-line-container gantBody" style={{ borderRadius: "20px" }}>
//                         <TimeLine data={theTasks} />
//                     </div>
//                 </div>
//             </div> */}
//         </>
//     );
// }

import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import './gantt.css';





class Gantt extends Component {
    componentDidMount() {

        const { tasks } = this.props;
        gantt.init(this.ganttContainer);
        gantt.parse(tasks);
    }

    render() {

        return (
            <div
                ref={(input) => { this.ganttContainer = input }}
                style={{ width: '100%', height: '100%' }}
            ></div>
        );
    }
}
export default Gantt;