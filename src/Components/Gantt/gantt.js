import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import './gantt.css'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import '../Gantt/gantt.css'
import { Redirect } from 'react-router';

export default class Gantt extends Component {

    constructor(props) {
        debugger
        super(props);
        this.initZoom();
    }


    dataProcessor = null;

    initZoom() {
        gantt.ext.zoom.init({
            levels: [
                // {
                //     name: 'Hours',
                //     scale_height: 60,
                //     min_column_width: 30,
                //     scales: [
                //         { unit: 'day', step: 1, format: '%d %M' },
                //         { unit: 'hour', step: 1, format: '%H' }
                //     ]
                // },
                {
                    name: 'Days',
                    scale_height: 60,
                    min_column_width: 40,

                    scales: [

                        { unit: "month", step: 1, format: "%F %Y" },
                        { unit: "day", step: 1, format: "%j" }
                        // { unit: 'month', step: 1, format: 'month #%W' },
                        // { unit: 'week', step: 1, format: 'Week #%W' },
                        // { unit: 'day', step: 1, format: '%d %M' }
                    ]
                },
                // {
                //     name: 'Months',
                //     scale_height: 60,
                //     min_column_width: 70,
                //     scales: [
                //         { unit: "month", step: 1, format: '%F' },
                //         { unit: 'week', step: 1, format: '#%W' }
                //     ]
                // }
            ]
        });
    }

    setZoom(value) {
        gantt.ext.zoom.setLevel(value);
    }

    initGanttDataProcessor() {
        const onDataUpdated = this.props.onDataUpdated;
        // this.dataProcessor = gantt.createDataProcessor((type, action, item, id) => {
        //     return new Promise((resolve, reject) => {
        //         if (onDataUpdated) {
        //             onDataUpdated(type, action, item, id);
        //         }

        //         // if onDataUpdated changes returns a permanent id of the created item, you can return it from here so dhtmlxGantt could apply it
        //         // resolve({id: databaseId});
        //         return resolve();
        //     });
        // });
    }

    shouldComponentUpdate(nextProps) {
        return this.props.zoom !== nextProps.zoom;
    }

    componentDidMount() {


        gantt.attachEvent("onBeforeTaskDisplay", function (id, task) {
            if (task.priority == "high") {
                return true;
            }
            return false;
        });
        gantt.config.xml_date = "%Y-%m-%d %H:%i";
        const { tasks } = this.props;
        gantt.init(this.ganttContainer);
        this.initGanttDataProcessor();
        gantt.parse(tasks);

        gantt.templates.scale_cell_class = function (date) {
            debugger
            // if(date.getDay()==4||date.getDay()==6){
            return "weekend";
        }
        gantt.templates.task_class = function (start, end, task) {
            if (task.progress > 0 && task.progress < 1) {
                task.color = "pink";
            }
            else {
                task.color = "green";
            }
        };
        // gantt.templates.tooltip_text = function(start,end,task){
        //     return "<b>start:</b> "+task.start_date+"<br/><b>end:</b> " + task.duration;
        // };
        gantt.templates.tooltip_date_format = function (date) {
            var formatFunc = gantt.date.date_to_str("%Y-%m-%d");
            return formatFunc(date);
        };
    }

    componentWillUnmount() {
        if (this.dataProcessor) {
            this.dataProcessor.destructor();
            this.dataProcessor = null;
        }
    }


    render() {
        // const { zoom } = this.props;
        // this.setZoom(zoom);
        return (
            <>
                {/* <div style={{height:'300px',width:'60px',backgroundColor:'black'}}></div> */}
                {/* ref={(input) => { this.ganttContainer = input }}
                style={{ width: '100%', height: '100%' }} */}
            </>
        );
    }
}

