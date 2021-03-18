import React, { Component } from 'react';
import { useParams } from 'react-router';
import Routing from '../routing/routing';
import Gantt from './gantt';
import workspaces from './workspace.json'

export default function DisplayGantt() {
    debugger
    const projectName = useParams();
    console.log(projectName);
    const allWorkspace = { workspaces };
    console.log(allWorkspace);
    const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;

    const theCards = []
    const theTasks = []

    allTheWorkspaces.map((item, index) => {
        {

            item.name === projectName.projectName ? item.cards.map((item, index) => {
                { theCards.push(item); }
            })
                : console.log("bed", item.cards);
        }
    })
    console.log("the cards", theCards);
    // console.log("now", theCards);

    {
        theCards ? theCards.map((item, index) => {
            item.tasks.map((item, index) => {
                console.log("oooooooppppppp", item);
                theTasks.push(item)
            })
        }) : theTasks.push(null)

    }

    console.log("the tasks", theTasks);

    const state = {
        currentZoom: 'Days',
        messages: []
    };
    const data = {
        data: theTasks,
        // data: [

        //     { id: 1, text: 'Task #1', start_date: "'1000-02-12'", duration: 0, progress: 0 },
        //     { id: 2, text: 'Task #1', start_date: '2020-02-12', duration: 3, progress: 0.6, priority: "high" },
        //     { id: 3, text: 'Task #2', start_date: '2020-04-16', duration: 3, progress: 0.4, priority: "high" },
        //     { id: 4, text: 'Task #2', start_date: '2100-04-16', duration: 1, progress: 1 }
        // ],

        links: [
            { id: 1, source: 1, target: 2, type: '0' }
        ]
    };

    // addMessage(message) {
    //     const maxLogLength = 5;
    //     const newMessate = { message };
    //     const messages = [
    //         newMessate,
    //         ...this.state.messages
    //     ];

    //     if (messages.length > maxLogLength) {
    //         messages.length = maxLogLength;
    //     }
    //     this.setState({ messages });
    // }

    const logDataUpdate = (type, action, item, id) => {
        let text = item && item.text ? ` (${item.text})` : '';
        let message = `${type} ${action}: ${id} ${text}`;
        if (type === 'link' && action !== 'delete') {
            message += ` ( source: ${item.source}, target: ${item.target} )`;
        }
        this.addMessage(message);
    }

    const handleZoomChange = (zoom) => {
        this.setState({
            currentZoom: zoom
        });
    }


    const { currentZoom, messages } = state;
    return (
        <div>
            <div className="zoom-bar">
                {/* <Toolbar
            zoom={currentZoom}
            onZoomChange={this.handleZoomChange}
          /> */}
            </div>
            <div className="gantt-container">
                <Gantt
                    tasks={data}
                    zoom={currentZoom}
                    onDataUpdated={logDataUpdate}
                />
            </div>
            {/* <MessageArea
          messages={messages}
        /> */}
        </div>
    );

}
