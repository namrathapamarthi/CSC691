import React from 'react';
import './Bar.css';

const Bar = ({ percent }) => {
    return (
        <div className="bar" style={{ width: `${percent}%` }} ></div>
    )
}

export default Bar;