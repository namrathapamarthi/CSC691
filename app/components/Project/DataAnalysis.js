import React from 'react';
import { Table, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

const DataAnalysis = (props) => {

    const tableStructure = [
        {
            name: 'Sprint',
            selector: 'Sprint',
            sortable: true,
        },
        {
            name: 'BurnDownEffort',
            selector: 'BurnDownEffort',
            sortable: true,
        },
        {
            name: 'OverAllProductivity',
            selector: 'OverAllProductivity',
            sortable: true,
        },
        {
            name: 'StoryPoint',
            selector: 'StoryPoint',
            sortable: true,
        },
        {
            name: 'RequirementAnalysisEffort',
            selector: 'RequirementAnalysisEffort',
            sortable: true,
        },
        {
            name: 'RequirementAnalysisDensity',
            selector: 'RequirementAnalysisDensity',
            sortable: true,
        },
        {
            name: 'CodingEffort',
            selector: 'CodingEffort',
            sortable: true,
        },
        {
            name: 'CodingEffortDensity',
            selector: 'CodingEffortDensity',
            sortable: true,
        },
        {
            name: 'UnitTestingEffort',
            selector: 'UnitTestingEffort',
            sortable: true,
        },
        {
            name: 'UnitTestingDensity',
            selector: 'UnitTestingDensity',
            sortable: true,
        },
        {
            name: 'UnitTestingEffort',
            selector: 'UnitTestingEffort',
            sortable: true,
        },
        {
            name: 'UnitTestingDensity',
            selector: 'UnitTestingDensity',
            sortable: true,
        }
    ];
    return (
        <div>
            <DataTable
                title="Data Analysis Dashboard"
                columns={tableStructure}
                data={props.projectBurnDetails}
            />

            <center>
                <Button variant="primary" onClick={() => props.onGraphAnalysis()}> Perform  Analysis</Button>
            </center>
        </div>
    );
}

export default DataAnalysis;
