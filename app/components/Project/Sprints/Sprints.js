import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import Sprint from './Sprint/Sprint';

const Sprints = (props) => {
    return (
        <div>
            {
                props.sprintAction === "DisplaySprints" ?
                    <div>
                        <DataTable
                            title="Sprint Dashboard"
                            columns={props.sprintColumnStrucutre}
                            data={props.sprintsInformation}
                        />
                        <center>
                            <Button variant="outline-info" onClick={() => { props.addSprint() }}>Add Sprint</Button>
                            <Button variant="secondary" onClick={() => { props.parentProjectPage(props.parentProject._id) }} > back </Button>
                        </center>
                    </div>
                    :
                    <Sprint
                        sprintAction={props.sprintAction}
                        sprintInfo={props.sprintInfo}
                        onChange={(event) => { props.onChange(event) }}
                        saveSprint={() => { props.saveSprint() }}
                        onShowUserStories={() => { props.onShowUserStories() }}
                        previousPage={() => { props.parentSprintsPage() }}
                    />

            }
        </div>
    );
}

export default Sprints;
