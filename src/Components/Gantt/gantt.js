import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import './gantt.css'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

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
                {
                    name: 'Hours',
                    scale_height: 60,
                    min_column_width: 30,
                    scales: [
                        { unit: 'day', step: 1, format: '%d %M' },
                        { unit: 'hour', step: 1, format: '%H' }
                    ]
                },
                {
                    name: 'Days',
                    scale_height: 60,
                    min_column_width: 70,
                    scales: [

                        { unit: "month", step: 1, format: "%F" },
                        { unit: "month", step: 1, format: "%Y" },
                        { unit: "day", step: 1, format: "%j, %D" }



                    ]
                },
                {
                    name: 'Months',
                    scale_height: 60,
                    min_column_width: 70,
                    scales: [
                        { unit: "month", step: 1, format: '%F' },
                        { unit: 'week', step: 1, format: '#%W' }
                    ]
                }
            ]
        });
    }

    setZoom(value) {
        gantt.ext.zoom.setLevel(value);
    }

    initGanttDataProcessor() {
        const onDataUpdated = this.props.onDataUpdated;
        this.dataProcessor = gantt.createDataProcessor((type, action, item, id) => {
            return new Promise((resolve, reject) => {
                if (onDataUpdated) {
                    onDataUpdated(type, action, item, id);
                }



                return resolve();
            });
        });
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

    }

    componentWillUnmount() {
        if (this.dataProcessor) {
            this.dataProcessor.destructor();
            this.dataProcessor = null;
        }
    }


    render() {
        const { zoom } = this.props;
        this.setZoom(zoom);

        return (
            <div
                ref={(input) => { this.ganttContainer = input }}

            >
            </div>
        );
    }
}

