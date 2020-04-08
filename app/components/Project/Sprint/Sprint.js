import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';

const Sprint = props => (
  <div>
    <DataTable
      title="Sprint Dashboard"
      columns={props.sprintColumnStrucutre}
      data={props.sprintInformation}
    />
    <Button variant="outline-info">Add Sprint to Project</Button>
  </div>
);

export default Sprint;
