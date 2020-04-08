import React from 'react';
import { Button } from 'react-bootstrap';

const Project = props => (
  <div>
    <h1>
      {' '}
      <p> {props.projectInfo.Project_Name}</p>{' '}
    </h1>
    <label> Project Name: </label>
    <input type="text" value={props.projectInfo.Project_Name} />
    <br />
    <label> Project status: </label>
    <input type="text" value={props.projectInfo.Project_Status} />
    <br />
    <label> Project start date: </label>
    <input type="text" value={props.projectInfo.Start_Date} />
    <label> Project end date: </label>
    <input type="text" value={props.projectInfo.End_Date} />
    <br />
    <Button
      variant="outline-success"
      onClick={() => {
        props.springInformationHanlder(props.projectInfo.Project_Name);
      }}
    >
      Sprint Information
    </Button>
  </div>
);

export default Project;
