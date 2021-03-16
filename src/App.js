import React, { Component, useState } from "react";
import ReactDOM from "react-dom"
import TimeLine from "react-gantt-timeline";
import workspaces from './Components/Gantt/workspace.json'
import './App.css';
import Header from "./Components/Header/header";
import Gantt from "./Components/Gantt/gantt";
import Routing from "./Components/Gantt/routing";
debugger

export default function App() {
    const allWorkspace = { workspaces };
    console.log(allWorkspace);
    const allProjects = allWorkspace.workspaces.workspaces.projects;
    console.log(allProjects);
    const tasks = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks[0];
    console.log(tasks);
    console.log(allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks);
    const data = {
        data: [

            { id: 1, text: 'mm', start_date: '15-04-1000', duration: 3, progress: 0.6 },
            { id: 2, text: 'hub', start_date: '12-04-2019', duration: 3, progress: 0.4 },
            { id: 3, text: 'logo works', start_date: '13-04-2019', duration: 3, progress: 0.5 },
            { id: 4, text: 'knoy my', start_date: '14-04-2019', duration: 3, progress: 0.6 },
            { id: 5, text: 'project', start_date: '15-04-2019', duration: 3, progress: 0.7 },
            { id: 6, text: 'hub', start_date: '12-04-1500', duration: 3, progress: 0.8 },


        ],
        links: [
            { id: 6, source: 6, target: 6, type: '0' }
        ]
    };
    // const d1 = new Date();
    // const d2 = new Date();
    // d2.setDate(d2.getDate() + 5);
    // const [gantData, setGantData] = useState({
    //     id: 0,
    //     start: d1,
    //     end: d2,
    //     name: "ui",
    //     color: "pink"
    // })
    // allProjects.map((item, index) => {
    //     item.cards.map((item, index) => {
    //         item.tasks.map((item, index) => {
    //             alert("hjvj");
    //         }

    //         )
    //     })
    // })


    // constructor(props) {

    //     super(props);
    //     // this.state = {
    //     //     gantData: {
    //     //         id: 0,
    //     //         start: '',
    //     //         end: '',
    //     //         name: "",
    //     //         color: ""
    //     //     }
    //     // };

    //     let d1 = new Date();
    //     let d2 = new Date();
    //     d2.setDate(d2.getDate() + 5);
    //     let d3 = new Date();
    //     d3.setDate(d3.getDate() + 8);
    //     let d4 = new Date();
    //     d4.setDate(d4.getDate() + 20);
    //     let d5 = new Date();
    //     d5.setDate(d5.getDate() + 25);
    //     let d6 = new Date();
    //     d6.setDate(d6.getDate() + 28);
    //     this.gantData = [{
    //         id: tasks.id,
    //         start: d1,
    //         end: d5,
    //         name: tasks.description,
    //         color: tasks.color,

    //     }]
    //     this.data = [
    //         {
    //             id: 1,
    //             start: d1,
    //             end: d5,
    //             name: "Demo Task 1",
    //             color: "blue",

    //         },
    //         {
    //             id: 2,
    //             start: d3,
    //             end: d4,
    //             name: "Demo Task 2",
    //             color: "pink"
    //         },
    //         {
    //             id: 2,
    //             start: d2,
    //             end: d5,
    //             name: "Demo Task 2",
    //             color: "orange"
    //         },
    //         {
    //             id: 2,
    //             start: d4,
    //             end: d5,
    //             name: "Demo Task 2",
    //             color: "pink"
    //         },
    //         {
    //             id: 2,
    //             start: d5,
    //             end: d6,
    //             name: "Demo Task 2",
    //             color: "blue"
    //         },
    //         {
    //             id: 2,
    //             start: d2,
    //             end: d6,
    //             name: "Demo Task 2",
    //             color: "orange"
    //         }
    //     ];
    //     // this.links = [{ id: 1, start: 1, end: 2 }];
    // }

    return (
        //     <div className="App">
        //         <Routing></Routing>
        //         {/* <Gantt></Gantt> */}
        //         {allProjects.map((item, index) => (
        //             <tr>
        //                 <td>
        //                     {
        //                         item.cards.map((item, index) => (
        //                             <tr>
        //                                 <td>
        //                                     {
        //                                         item.tasks.map((item, indes) => (
        //                                             <>

        //                                                 {/* console.log("dknk",item); */}
        //                                                 {/* this.state.gantData={this.state.gantData.id = item.id, this.state.gantData.start = item.startDate, this.state.gantData.end = item.dueDate, this.state.gantData.name = item.description, this.data.color = item.color} */}

        //                                             </>


        //                                         ))
        //                                     }
        //                                 </td>
        //                             </tr>
        //                         ))
        //                     }
        //                 </td>
        //             </tr>
        //         ))}
        //         {/* <div className="time-line-container gantBody">
        //             <TimeLine data={the} />
        //         </div> */}

        //     </div>
        <Gantt tasks={data} />
    );
}
// import React, { Component } from 'react';
// import Gantt from './Components/Gantt/gantt';
// import './App.css';

// const data = {
//     data: [
//         { id: 1, text: 'Task #1', start_date: '15-04-2019', duration: 3, progress: 0.6 },
//         { id: 2, text: 'Task #2', start_date: '18-04-2019', duration: 3, progress: 0.4 }
//     ],
//     links: [
//         { id: 1, source: 1, target: 2, type: '0' }
//     ]
// };
// class App extends Component {
//     render() {
//      return (
//         <div>
//              <div className="gantt-container">
//             <Gantt tasks={data}/>
//              </div>
//         </div>
//      );
//     }
//  }
//  export default App;