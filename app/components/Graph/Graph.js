import React, { Component } from "react";
import Line from './Line/Line';
import BarTextContent from './BarTextContent/BarTextContent';
import Bar from './Bar/Bar';


import './Graph.css'


class Graph extends Component {
    state = {

    }

    renderLines() {
        return Array(20).fill(null).map((el, i) => (
            <Line
                left={i * 5}
                key={i}
            />
        ))
    }

    render() {
        return (

            <div className="graph-wrapper" >
                <div className="graph" >
                    <BarTextContent />
                    <div className="bar-lines-container">
                        {this.renderLines()}
                        <Bar percent={50} />
                        <Bar percent={25} />
                        <Bar percent={25} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Graph;