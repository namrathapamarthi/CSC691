import React from 'react';

import './Line.css';

const Line = ({ left }) => {
    return (<div className="line"
        style={{ left: `${left}%` }}
    >
    </div>
    );
}

export default Line;