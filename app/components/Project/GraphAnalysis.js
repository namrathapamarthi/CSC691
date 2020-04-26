import React from 'react';
import BarChart from 'react-bar-chart';

const GraphAnalysis = (props) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  return (
    <div>
      <BarChart ylabel='Overall Productivity'
        width={500}
        height={500}
        margin={margin}
        data={props.projectGraphDetails.OverAllProductivity}
      />
      <BarChart ylabel='Requirement Analysis'
        width={500}
        height={500}
        margin={margin}
        data={props.projectGraphDetails.RequirementAnalysis}
      />
      <BarChart ylabel='Coding'
        width={500}
        height={500}
        margin={margin}
        data={props.projectGraphDetails.Coding}
      />
      <BarChart ylabel='Unit Testing'
        width={500}
        height={500}
        margin={margin}
        data={props.projectGraphDetails.UnitTesting}
      />
      <BarChart ylabel='Code Review'
        width={500}
        height={500}
        margin={margin}
        data={props.projectGraphDetails.CodeReview}
      />
      <BarChart ylabel='Testing'
        width={500}
        height={500}
        margin={margin}
        data={props.projectGraphDetails.Testing}
      />
      <BarChart ylabel='Rework'
        width={500}
        height={500}
        margin={margin}
        data={props.projectGraphDetails.Rework}
      />
    </div>
  );
}

export default GraphAnalysis;