import React from 'react';
import { Button } from 'react-bootstrap';

const UserStory = props => (
  <div>
    <h1>
      {' '}
      <p> {props.userStoryInfo.User_Story} Dashboard</p>{' '}
    </h1>
    <label> Phase </label>
    <input type="text" value={props.userStoryInfo.Sprint_Name} />
    <br />
    <label> Developer: </label>
    <input type="text" value={props.userStoryInfo.Developer} />
    <br />
    <label> Tester: </label>
    <input type="text" value={props.userStoryInfo.Tester} />
    <label> Acceptance Criteria </label>
    <input type="text" value={props.userStoryInfo.Acceptance_Criteria} />
    <label> Total Hr </label>
    <input type="text" value={props.userStoryInfo.Total_Hr} />
    <br />
    <Button variant="outline-info">Add User to Sprint</Button>
  </div>
);

export default UserStory;
