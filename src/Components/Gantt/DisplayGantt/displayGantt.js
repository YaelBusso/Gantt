
import React, { Component } from 'react';
import { useParams } from 'react-router';
import Routing from '../../routing/routing';
import Gantt from '../gantt';
import './displayGantt.css'
import workspaces from '../workspace.json'

export default function DisplayGantt() {

    const projectName = "project1";
    console.log(projectName);
    const allWorkspace = { workspaces };
    console.log(allWorkspace);
    const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;


    const theCards = []
    const theTasks = []
    const mone = []

    allTheWorkspaces.map((item, index) => {
        {
            item.name === projectName ? item.cards.map((item, index) => {
                {
                    theCards.push(item);
                    console.log("pppppppp", item)

                }

            })
                : console.log("bed", item.cards);
        }
    })
    console.log("the cards", theCards);

    {
        theCards.map((item, index) => {

            let indexOf = 0;

            item.tasks.map((item) => {
                indexOf++;


                theTasks.push(item)


            })

            mone.push(indexOf)

        })

    }
    console.log("mone", mone);
    let minYear = "3000-01-01";
    let maxYear = "1000-01-01";
    let currDate;



    {
        theTasks.map((item) => {
            let year = item.start_date.split('-')[0];
            if (year > maxYear.split('-')[0]) {

                currDate = year
                console.log("papapap", year);
                year = year.concat('-01-01')
                console.log("tttt", year);
                maxYear = year;
            } else if (year < minYear) {
                minYear = year
            }
            else {
                return
            }


        })


    }
    currDate = parseInt(currDate)
    currDate = currDate + 2
    currDate = currDate.toString();

    currDate = currDate.concat('-01-01')

    maxYear = currDate;
    console.log();
    theTasks.push(

        {
            "id": 2985730,
            "text": "first",
            "start_date": currDate,
            "duration": 3,
            "progress": 0.6,
        })


    console.log("the tasks", theTasks);

    const state = {
        currentZoom: 'Days',
        messages: []
    };
    const data = {
        data: theTasks,
        links: [
            { id: 1, source: 7, target: 7, type: '0' }
        ]
    };

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
            <div className="gantt-container row ">
                <div className="col-2"></div>
                <div className="col-4">
                    {

                        theCards.map((cards, index) =>
                            <div className="cardsName" style={{ lineHeight: mone[index] + 3 }}>{cards.name} </div>
                        )
                    }
                </div>
                <div className="col-6">
                    <Gantt
                        tasks={data}
                        zoom={currentZoom}
                        onDataUpdated={logDataUpdate}
                    />


                </div>
            </div>
        </div>
    );
}
