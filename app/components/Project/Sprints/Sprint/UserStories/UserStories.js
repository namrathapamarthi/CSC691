import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import UserStory from './UserStory/UserStory';

const UserStories = (props) => {
    return (
        <div>
            {
                props.userStoryAction === "DisplayUserStories" ?
                    <div>
                        <DataTable
                            title="User Stories Dashboard"
                            columns={props.userStoriesColumnStructure}
                            data={props.userStories}
                        />
                        <center>
                        <Button variant="outline-info" onClick={() => { props.addUserStory() }}>Add User Story</Button>
                        <Button variant="secondary" onClick={() => { props.parentSpringPage(props.parentSprint.Sprint_Phase) }}>back</Button>
                        </center>                      
                    </div>
                    : <UserStory
                        userStoryInfo={props.userStoryInfo}
                        userStoryAction={props.userStoryAction}
                        parentSpringPage={props.parentSpringPage}
                        onChange={(event) => { props.onChange(event) }}
                        saveUserStory={() => { props.saveUserStory() }}
                    />
            }
        </div>
    );
}

export default UserStories;