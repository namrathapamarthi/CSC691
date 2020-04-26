import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';

import Project from '../../components/Project/Project';
import Sprints from '../../components/Project/Sprints/Sprints';
import UserStories from '../../components/Project/Sprints/Sprint/UserStories/UserStories';

class Projects extends Component {

    state = {

        // Project variables which are managed via state
        displayProjectTable: true,
        displayProjectInformation: false,
        displayProject: {},
        projectAction: "Display",
        projectData: [],
        displayProjectAnalysis: false,
        projectBurnDownEfforts: [{}],
        projectGraphAnalysis: [{}],

        // Sprint information variables which are managed via state
        displaySprintInfromation: false,
        displaySprint: {},
        displaySprints: [{}],
        sprintAction: "DisplaySprints",

        // Userstory information for a  specific project
        displayUserStoryInformation: false,
        displayUserStory: null,
        displayUserStories: [{}],
        userStoryAction: "DisplayUserStories"
    }
    componentDidMount() {
        axios.get('http://localhost:5000/projects/')
            .then(response => {
                if (response.data.length > 0) {
                    const recievedData = [];
                    response.data.map(project => {
                        recievedData.push(project);
                    });
                    this.setState({
                        projectData: recievedData
                    });
                }
            })
    }

    displayProjectTable = () => {
        this.setState({
            displayProjectTable: true,
            displayProjectInformation: false,
            displayProject: {},
            projectAction: "Display",
            displayProjectAnalysis: false,

            // Sprint information variables which are managed via state
            displaySprintInfromation: false,
            displaySprint: {},
            displaySprints: [{}],
            sprintAction: "DisplaySprints",

            // Userstory information for a  specific project
            displayUserStoryInformation: false,
            displayUserStory: null,
            displayUserStories: [{}],
            userStoryAction: "DisplayUserStories"
        });
    }

    addNewProject = () => {
        let displayProjectInfo = {
            ...this.state.displayProject
        };

        // initializing project properties with dummy values
        displayProjectInfo = { Project_Name: ' ', Client_Name: ' ', Project_Type: '', Start_Date: new Date().toJSON().slice(0, 10), End_Date: new Date().toJSON().slice(0, 10) };

        this.setState({
            displayProject: displayProjectInfo,
            projectAction: "New",
            displayProjectInformation: true,
            displayProjectTable: false,
            displaySprintInfromation: false,
            displayUserStoryInformation: false
        });
    };


    addNewProjectToState = () => {
        let displayProjectInfo = {
            ...this.state.displayProject
        };

        axios.post('http://localhost:5000/projects/add', displayProjectInfo)
            .then(response => {
                axios.get('http://localhost:5000/projects/')
                    .then(response => {
                        if (response.data.length > 0) {
                            const recievedData = [];
                            response.data.map(project => {
                                recievedData.push(project);
                            });
                            this.setState({
                                projectData: recievedData,
                                projectAction: "Add",
                                displayProjectInformation: false,
                                displayProjectTable: true,
                                displaySprintInfromation: false,
                                displayUserStoryInformation: false
                            });
                        }
                    });
            });
    };

    onProjectDetailsChange(event) {

        let displayProjectInfo = {
            ...this.state.displayProject
        };

        displayProjectInfo[event.target.name] = event.target.value
        // // parent class change handler is always called with field name and value
        this.setState({ displayProject: displayProjectInfo });
    }

    displayProjectInformationHandler = (projectId) => {
        axios.get('http://localhost:5000/projects/' + projectId)
            .then(response => {
                {
                    let displayProjectInfo = {
                        ...this.state.displayProject
                    };
                    displayProjectInfo = response.data;
                    this.setState({
                        displayProject: displayProjectInfo,
                        projectAction: "Display",
                        displayProjectInformation: true,
                        displayProjectTable: false,
                        displaySprintInfromation: false,
                        displayUserStoryInformation: false
                    });
                }
            })
    }

    enableDataAnalysis = () => {
        let displayProjectInfo = {
            ...this.state.displayProject
        };

        let projectBurnDownDetails = {
            ...this.state.projectBurnDownEfforts
        };

        let projectGraphDetails = {
            ...this.state.projectGraphAnalysis
        };

        projectBurnDownDetails = [];
        projectGraphDetails = [
            {
                "OverAllProductivity": [],
                "RequirementAnalysis": [],
                "Coding": [],
                "UnitTesting": [],
                "CodeReview": [],
                "Testing": [],
                "Rework": []
            }
        ];

        var overAllProductivityGraphValues = [];
        var requirementAnalysisEffortGraphValues = [];
        var codingEffortGraphValues = [];
        var unitTestingEffortGraphValues = [];
        var codeReviewEffortGraphValues = [];
        var testingEffortGraphValues = [];
        var reworkEffortGraphValues = [];

        var index = 0;
        for (index = 0; index < displayProjectInfo.Project_Sprints.length; index++) {
            var burnDownEffort = 0;
            var overAllProductivity = 0;
            var storyPoint = 0;
            var requirementAnalysisEffort = 0;
            var codingEffort = 0;
            var unitTestingEffort = 0;
            var codeReviewEffort = 0;
            var testingEffort = 0;
            var reworkEffort = 0;
            var sprtingIterator = 0;

            for (sprtingIterator = 0; sprtingIterator < displayProjectInfo.Project_Sprints[index].User_Stories.length; sprtingIterator++) {
                let currentUserStory = displayProjectInfo.Project_Sprints[index].User_Stories[sprtingIterator];
                storyPoint += eval(currentUserStory.Story_Point);
                requirementAnalysisEffort += eval(currentUserStory.Phase_Details[0].Hours_Spent);
                codingEffort += eval(currentUserStory.Phase_Details[1].Hours_Spent);
                unitTestingEffort += eval(currentUserStory.Phase_Details[2].Hours_Spent);
                codeReviewEffort += eval(currentUserStory.Phase_Details[3].Hours_Spent);
                testingEffort += eval(currentUserStory.Phase_Details[4].Hours_Spent);
                reworkEffort += eval(currentUserStory.Phase_Details[5].Hours_Spent);
                burnDownEffort += eval(currentUserStory.Total_Hours);
            }
            projectBurnDownDetails.push({
                "Sprint": displayProjectInfo.Project_Sprints[index].Sprint_Phase,
                "BurnDownEffort": burnDownEffort,
                "OverAllProductivity": eval(burnDownEffort / storyPoint),
                "StoryPoint": storyPoint,
                "RequirementAnalysisEffort": requirementAnalysisEffort,
                "RequirementAnalysisDensity": eval(requirementAnalysisEffort / storyPoint),
                "CodingEffort": codingEffort,
                "CodingEffortDensity": eval(codingEffort / storyPoint),
                "UnitTestingEffort": unitTestingEffort,
                "UnitTestingDensity": eval(unitTestingEffort / storyPoint),
                "CodeReviewEffort": codeReviewEffort,
                "CodeReviewDensity": eval(codeReviewEffort / storyPoint),
                "TestingEffort": testingEffort,
                "TestingEffortDensity": eval(testingEffort / storyPoint),
                "ReworkEffort": reworkEffort,
                "ReworkEffortDensity": eval(reworkEffort / storyPoint),
            });
            overAllProductivityGraphValues.push({ text: displayProjectInfo.Project_Sprints[index].Sprint_Phase, value: eval(burnDownEffort / storyPoint) });
            requirementAnalysisEffortGraphValues.push({ text: displayProjectInfo.Project_Sprints[index].Sprint_Phase, value: eval(requirementAnalysisEffort / storyPoint) });
            codingEffortGraphValues.push({ text: displayProjectInfo.Project_Sprints[index].Sprint_Phase, value: eval(codingEffort / storyPoint) });
            unitTestingEffortGraphValues.push({ text: displayProjectInfo.Project_Sprints[index].Sprint_Phase, value: eval(unitTestingEffort / storyPoint) });
            codeReviewEffortGraphValues.push({ text: displayProjectInfo.Project_Sprints[index].Sprint_Phase, value: eval(codeReviewEffort / storyPoint) });
            testingEffortGraphValues.push({ text: displayProjectInfo.Project_Sprints[index].Sprint_Phase, value: eval(testingEffort / storyPoint) });
            reworkEffortGraphValues.push({ text: displayProjectInfo.Project_Sprints[index].Sprint_Phase, value: eval(reworkEffort / storyPoint) });
        }
        projectGraphDetails.OverAllProductivity = overAllProductivityGraphValues;
        projectGraphDetails.RequirementAnalysis = requirementAnalysisEffortGraphValues;
        projectGraphDetails.Coding = codingEffortGraphValues;
        projectGraphDetails.UnitTesting = unitTestingEffortGraphValues;
        projectGraphDetails.CodeReview = codeReviewEffortGraphValues;
        projectGraphDetails.Testing = testingEffortGraphValues;
        projectGraphDetails.Rework = reworkEffortGraphValues;

        this.setState({
            projectAction: "PerformDataAnalysis",
            projectBurnDownEfforts: projectBurnDownDetails,
            projectGraphAnalysis: projectGraphDetails,
            displayProjectInformation: true,
            displayProjectTable: false,
            displaySprintInfromation: false,
            displayUserStoryInformation: false
        });
    }

    enableGraphAnalysis = () => {
        this.setState({
            projectAction: "PerformGraphAnalysis",
            displayProjectInformation: true,
            displayProjectTable: false,
            displaySprintInfromation: false,
            displayUserStoryInformation: false
        });
    }

    editProjectInformationHandler = (projectId) => {
        axios.get('http://localhost:5000/projects/' + projectId)
            .then(response => {
                {
                    let displayProjectInfo = {
                        ...this.state.displayProject
                    };
                    displayProjectInfo = response.data;
                    this.setState({
                        displayProject: displayProjectInfo,
                        projectAction: "Edit",
                        displayProjectInformation: true,
                        displayProjectTable: false,
                        displaySprintInfromation: false,
                        displayUserStoryInformation: false
                    });
                }
            })
    }

    deleteProjectInformationHandler = (projectId) => {
        axios.delete('http://localhost:5000/projects/' + projectId)
            .then(response => {
                axios.get('http://localhost:5000/projects/')
                    .then(response => {
                        const recievedData = [];
                        if (response.data.length > 0) {
                            response.data.map(project => {
                                recievedData.push(project);
                            });

                        }
                        this.setState({
                            projectData: recievedData,
                            displayProjectInformation: false,
                            displayProjectTable: true,
                            displaySprintInfromation: false,
                            displayUserStoryInformation: false
                        });
                    });
            })
    }

    updateProjectInformationHandler = () => {
        let displayProjectInfo = {
            ...this.state.displayProject
        };
        axios.post('http://localhost:5000/projects/update/' + displayProjectInfo._id, displayProjectInfo)
            .then(response => {
                axios.get('http://localhost:5000/projects/')
                    .then(response => {
                        if (response.data.length > 0) {
                            const recievedData = [];
                            response.data.map(project => {
                                recievedData.push(project);
                            });
                            this.setState({
                                projectData: recievedData,
                                displayProjectInformation: false,
                                displayProjectTable: true,
                                displaySprintInfromation: false,
                                displayUserStoryInformation: false
                            });
                        }
                    });
            });
    }

    editSprintInformationHandler = (phase) => {

        let displayProjectInfo = {
            ...this.state.displayProject
        };

        let displaySprintInfo = {
            ...this.state.displaySprint
        };

        var j;
        for (j = 0; j < displayProjectInfo.Project_Sprints.length; j++) {
            if (displayProjectInfo.Project_Sprints[j].Sprint_Phase === phase) {
                displaySprintInfo = displayProjectInfo.Project_Sprints[j];
                break;
            }
        }

        this.setState({
            displaySprint: displaySprintInfo,
            displayProjectInformation: false,
            sprintAction: "EditSprint",
            displayProjectTable: false,
            displaySprintInfromation: true,
            displayUserStoryInformation: false
        });
    }

    displaySprintInformation = (phase) => {

        let displayProjectInfo = {
            ...this.state.displayProject
        };

        let displaySprintInfo = {
            ...this.state.displaySprint
        };
        var j;

        for (j = 0; j < displayProjectInfo.Project_Sprints.length; j++) {
            if (displayProjectInfo.Project_Sprints[j].Sprint_Phase === phase) {
                displaySprintInfo = displayProjectInfo.Project_Sprints[j];
                break;
            }
        }

        this.setState({
            displaySprint: displaySprintInfo,
            displayProjectInformation: false,
            sprintAction: "DisplaySprint",
            displayProjectTable: false,
            displaySprintInfromation: true,
            displayUserStoryInformation: false
        });
    }

    saveSprintToProject = () => {

        let displayProjectInfo = {
            ...this.state.displayProject
        };

        let displaySprintInfo = {
            ...this.state.displaySprint
        };

        //First check whether it is a new sprint or existing sprint
        var j;
        if (displayProjectInfo.Project_Sprints.length > 0) {
            let found = false;
            for (j = 0; j < displayProjectInfo.Project_Sprints.length; j++) {
                if (displayProjectInfo.Project_Sprints[j]._id === displaySprintInfo._id) {
                    found = true;
                    displayProjectInfo.Project_Sprints[j] = displaySprintInfo;
                    break;
                }
            }
            if (!found) {
                displayProjectInfo.Project_Sprints.push(displaySprintInfo);
            }
        } else {
            displayProjectInfo.Project_Sprints.push(displaySprintInfo);
        }

        axios.post('http://localhost:5000/projects/update/' + displayProjectInfo._id, displayProjectInfo)
            .then(response => {
                axios.get('http://localhost:5000/projects/')
                    .then(response => {
                        if (response.data.length > 0) {
                            const recievedData = [];
                            response.data.map(project => {
                                recievedData.push(project);
                            });

                            let projectInfo = {
                                ...this.state.displayProject
                            };

                            let sprintsInfo = {
                                ...this.state.displaySprints
                            };

                            var index = 0;
                            for (index = 0; index < recievedData.length; index++) {
                                if (recievedData[index]._id === projectInfo._id) {
                                    projectInfo = recievedData[index];
                                    sprintsInfo = projectInfo.Project_Sprints;
                                }
                            }

                            this.setState({
                                projectData: recievedData,
                                displayProject: projectInfo,
                                displaySprints: sprintsInfo,
                                sprintAction: "DisplaySprints",
                                displayProjectInformation: false,
                                displayProjectTable: false,
                                displaySprintInfromation: true,
                                displayUserStoryInformation: false
                            });
                        }
                    });
            });
    }

    deleteSprintInformationHandler = (sprintId) => {

        let displayProjectInfo = {
            ...this.state.displayProject
        };

        var j;

        for (j = 0; j < displayProjectInfo.Project_Sprints.length; j++) {
            if (displayProjectInfo.Project_Sprints[j]._id === sprintId) {
                displayProjectInfo.Project_Sprints.splice(j, 1);
                break;
            }
        }

        axios.post('http://localhost:5000/projects/update/' + displayProjectInfo._id, displayProjectInfo)
            .then(response => {
                axios.get('http://localhost:5000/projects/')
                    .then(response => {

                        if (response.data.length > 0) {
                            const recievedData = [];
                            response.data.map(project => {
                                recievedData.push(project);
                            });

                            let projectInfo = {
                                ...this.state.displayProject
                            };

                            let sprintsInfo = {
                                ...this.state.displaySprints
                            };

                            var index = 0;
                            for (index = 0; index < recievedData.length; index++) {
                                if (recievedData[index]._id === projectInfo._id) {
                                    projectInfo = recievedData[index];
                                    sprintsInfo = projectInfo.Project_Sprints;
                                }
                            }

                            this.setState({
                                projectData: recievedData,
                                displayProject: projectInfo,
                                displaySprints: sprintsInfo,
                                sprintAction: "DisplaySprints",
                                displayProjectInformation: false,
                                displayProjectTable: false,
                                displaySprintInfromation: true,
                                displayUserStoryInformation: false
                            });
                        }
                    });
            });
    }

    onSprintDetailsChange(event) {

        let displaySprintInfo = {
            ...this.state.displaySprint
        };

        displaySprintInfo[event.target.name] = event.target.value
        // // parent class change handler is always called with field name and value
        this.setState({ displaySprint: displaySprintInfo });
    }

    displaySprintInformationHandler = () => {

        let displayProjectInfo = {
            ...this.state.displayProject
        };

        let displaySprintsInfo = {
            ...this.state.displaySprints
        };

        displaySprintsInfo = displayProjectInfo.Project_Sprints;

        this.setState({
            displaySprints: displaySprintsInfo,
            sprintAction: "DisplaySprints",
            displayProjectInformation: false,
            displayProjectTable: false,
            displaySprintInfromation: true,
            displayUserStoryInformation: false
        });
    }

    addSprintToProject = () => {

        let displaySprintInfo = {
            ...this.state.displaySprint
        };

        // initializing project properties with dummy values
        displaySprintInfo = { "Sprint_Phase": "", "Start_Date": "", "End_Date": "" };

        this.setState({
            displaySprint: displaySprintInfo,
            displayProjectInformation: false,
            sprintAction: "NewSprint",
            displayProjectTable: false,
            displaySprintInfromation: true,
            displayUserStoryInformation: false
        });
    };

    displayUserStoriesInformationHanlder = () => {

        let displaySprintInfo = {
            ...this.state.displaySprint
        };

        let displayUserStoriesInfo = {
            ...this.state.displayUserStories
        };


        displayUserStoriesInfo = displaySprintInfo.User_Stories;

        this.setState({
            displayUserStories: displayUserStoriesInfo,
            sprintAction: "DisplayUserStories",
            displayProjectInformation: false,
            displayProjectTable: false,
            displaySprintInfromation: false,
            displayUserStoryInformation: true
        });

    }

    onUserStoryDetailsChange(event) {

        let displayUserStoryInfo = {
            ...this.state.displayUserStory
        };
        var index = 0;
        if (event.target.name.includes('Phase_Details')) {
            let phaseAttribute = event.target.name.substring(17, 40);
            let phaseIndex = event.target.name.substring(14, 15);
            if (phaseAttribute === 'Hours_Spent') {
                displayUserStoryInfo.Phase_Details[phaseIndex].Hours_Spent = event.target.value;
            }
            if (phaseAttribute === 'Current_Status') {
                displayUserStoryInfo.Phase_Details[phaseIndex].Current_Status = event.target.value;
            }
        }
        else {
            displayUserStoryInfo[event.target.name] = event.target.value;
        }

        var i, hoursSum = 0;
        for (i = 0; i < 6; i++) {
            hoursSum += eval(displayUserStoryInfo.Phase_Details[i].Hours_Spent);
        }

        displayUserStoryInfo.Total_Hours = hoursSum;

        this.setState({ displayUserStory: displayUserStoryInfo });
    }

    addUserStoryToSprint = () => {

        let displayUserStoryInfo = {
            ...this.state.displayUserStory
        };

        displayUserStoryInfo = {
            "User_Story_Name": "",
            "Developer_Name": "",
            "Tester_Name": "",
            "Acceptance_Criteria": "",
            "Total_Hours": "",
            "Phase_Details": [
                { "Phase_Name": "Requirement_Analysis", "Hours_Spent": 0, "Current_Status": "" },
                { "Phase_Name": "Coding", "Hours_Spent": 0, "Current_Status": "" },
                { "Phase_Name": "Unit_Testing", "Hours_Spent": 0, "Current_Status": "" },
                { "Phase_Name": "Code_Review", "Hours_Spent": 0, "Current_Status": "" },
                { "Phase_Name": "Testing", "Hours_Spent": 0, "Current_Status": "" },
                { "Phase_Name": "Rework", "Hours_Spent": 0, "Current_Status": "" }
            ]
        };

        this.setState({
            displayUserStory: displayUserStoryInfo,
            displayProjectInformation: false,
            userStoryAction: "NewUserStory",
            displayProjectTable: false,
            displaySprintInfromation: false,
            displayUserStoryInformation: true
        });
    };

    saveUserStoryToProject = (actionType) => {

        let displayProjectInfo = {
            ...this.state.displayProject
        };

        let displaySprintInfo = {
            ...this.state.displaySprint
        };

        let displayUserStoryInfo = {
            ...this.state.displayUserStory
        };
        var i;
        if (displaySprintInfo.User_Stories.length > 0 && actionType === 'Save') {
            let userStoryFound = false;
            for (i = 0; i < displaySprintInfo.User_Stories.length; i++) {
                if (displaySprintInfo.User_Stories[i]._id === displayUserStoryInfo._id) {
                    userStoryFound = true;
                    displaySprintInfo.User_Stories[i] = displayUserStoryInfo;
                    break;
                }
            }
            if (!userStoryFound) {
                displaySprintInfo.User_Stories.push(displayUserStoryInfo);
            }
        } else {
            displaySprintInfo.User_Stories.push(displayUserStoryInfo);
        }

        //First check whether it is a new sprint or existing sprint
        var j;
        if (displayProjectInfo.Project_Sprints.length > 0) {
            let found = false;
            for (j = 0; j < displayProjectInfo.Project_Sprints.length; j++) {
                if (displayProjectInfo.Project_Sprints[j]._id === displaySprintInfo._id) {
                    found = true;
                    displayProjectInfo.Project_Sprints[j] = displaySprintInfo;
                    break;
                }
            }
            if (!found) {
                displayProjectInfo.Project_Sprints.push(displaySprintInfo);
            }
        } else {
            displayProjectInfo.Project_Sprints.push(displaySprintInfo);
        }

        axios.post('http://localhost:5000/projects/update/' + displayProjectInfo._id, displayProjectInfo)
            .then(response => {
                axios.get('http://localhost:5000/projects/')
                    .then(response => {
                        if (response.data.length > 0) {
                            const recievedData = [];
                            response.data.map(project => {
                                recievedData.push(project);
                            });

                            let projectInfo = {
                                ...this.state.displayProject
                            };

                            let sprintsInfo = {
                                ...this.state.displaySprints
                            };

                            let sprintInfo = {
                                ...this.state.displaySprint
                            };

                            let userStoriesInfo ={
                                ...this.state.displayUserStories
                            }
                            var index = 0;
                            for (index = 0; index < recievedData.length; index++) {
                                if (recievedData[index]._id === projectInfo._id) {
                                    projectInfo = recievedData[index];
                                    sprintsInfo = projectInfo.Project_Sprints;
                                }
                            }

                            var sprintIterator = 0;
                            for (sprintIterator = 0; sprintIterator < sprintsInfo.length; sprintIterator++) {
                                if (sprintsInfo[sprintIterator]._id === sprintInfo._id) {
                                    sprintInfo = sprintsInfo[sprintIterator];
                                    userStoriesInfo = sprintInfo.User_Stories;
                                } 
                            }

                            this.setState({
                                projectData: recievedData,
                                displayProject: projectInfo,
                                displaySprints: sprintsInfo,
                                displaySprint: sprintInfo,
                                displayUserStories: userStoriesInfo,
                                userStoryAction: "DisplayUserStories",
                                displayProjectInformation: false,
                                displayProjectTable: false,
                                displaySprintInfromation: false,
                                displayUserStoryInformation: true
                            });
                        }
                    });
            });
    }

    render() {
        const columns = [
            {
                name: 'Project_Name',
                selector: 'Project_Name',
                sortable: true
            },
            {
                name: 'Client_Name',
                selector: 'Client_Name',
                sortable: true
            },
            {
                name: 'Project_Type',
                selector: 'Project_Type',
                sortable: true
            },
            {
                name: 'Start_Date',
                selector: 'Start_Date',
                sortable: true
            },
            {
                name: 'End_Date',
                selector: 'End_Date',
                sortable: true
            },
            {
                name: 'Actions',
                cell: row => <div>
                    <Button variant="info" onClick={() => { this.displayProjectInformationHandler(row._id) }}>
                        <i className="fa fa-info"></i>
                    </Button>
                    <Button variant="primary" onClick={() => { this.editProjectInformationHandler(row._id) }}>
                        <i className="fa fa-pencil"></i>
                    </Button>
                    <Button variant="warning" onClick={() => { this.deleteProjectInformationHandler(row._id) }}>
                        <i className="fa fa-trash"></i>
                    </Button></div>
            }
        ];

        const userStoryColumnStructure = [
            {
                name: 'User_Story_Name',
                selector: 'User_Story_Name',
                sortable: true,
            },
            {
                name: 'Developer_Name',
                selector: 'Developer_Name',
                sortable: true,
            },
            {
                name: 'Tester_Name',
                selector: 'Tester_Name',
                sortable: true,
            },
            {
                name: 'Acceptance_Criteria',
                selector: 'Acceptance_Criteria',
                sortable: true,
            },
            {
                name: 'Total_Hours',
                selector: 'Total_Hours',
                sortable: true,
            },
            {
                name: 'Actions',
                cell: row => <div>
                    <Button variant="info" >
                        <i className="fa fa-info"></i>
                    </Button>
                    <Button variant="primary" >
                        <i className="fa fa-pencil" onClick={() => { this.editUserStoryInformationHandler(row.User_Story_Name) }}></i>
                    </Button>
                    <Button variant="warning">
                        <i className="fa fa-trash"></i>
                    </Button></div>
            }
        ];

        const sprintColumnStrucutre = [
            {
                name: 'Sprint_Phase',
                selector: 'Sprint_Phase',
                sortable: true,
            },
            {
                name: 'Start_Date',
                selector: 'Start_Date',
                sortable: true,
            },
            {
                name: 'End_Date',
                selector: 'End_Date',
                sortable: true
            },
            {
                name: 'Actions',
                cell: row => <div>
                    <Button variant="info" onClick={() => { this.displaySprintInformation(row.Sprint_Phase) }}>
                        <i className="fa fa-info"></i>
                    </Button>
                    <Button variant="primary" onClick={() => { this.editSprintInformationHandler(row.Sprint_Phase) }}>
                        <i className="fa fa-pencil"></i>
                    </Button>
                    <Button variant="warning" onClick={() => { this.deleteSprintInformationHandler(row._id) }}>
                        <i className="fa fa-trash"></i>
                    </Button></div>
            }
        ];

        return (
            <div>
                {
                    this.state.displayProjectTable === true ?
                        <div>
                            <DataTable
                                title="Projects List"
                                columns={columns}
                                data={this.state.projectData}
                            />
                            <center>
                                <Button variant="success" onClick={() => this.addNewProject()}> Add a New Project</Button>
                            </center>
                        </div> :
                        null
                }
                {
                    this.state.displayProjectInformation === true ?
                        <div>
                            <Project
                                projectAction={this.state.projectAction}
                                onChange={this.onProjectDetailsChange.bind(this)}
                                projectInfo={this.state.displayProject}
                                springInformationHanlder={this.displaySprintInformationHandler}
                                addProject={this.addNewProjectToState}
                                updateProject={this.updateProjectInformationHandler}
                                performDataAnalysis={this.enableDataAnalysis}
                                GraphAnalysis={this.enableGraphAnalysis}
                                projectBurnDetails={this.state.projectBurnDownEfforts}
                                projectGraphDetails={this.state.projectGraphAnalysis}
                                previousPage={this.displayProjectTable} />
                        </div>
                        : null
                }
                {
                    this.state.displaySprintInfromation === true ?
                        <div>
                            <Sprints
                                sprintAction={this.state.sprintAction}
                                parentProject={this.state.displayProject}
                                sprintColumnStrucutre={sprintColumnStrucutre}
                                sprintsInformation={this.state.displaySprints}
                                sprintInfo={this.state.displaySprint}
                                onChange={this.onSprintDetailsChange.bind(this)}
                                addSprint={this.addSprintToProject}
                                saveSprint={this.saveSprintToProject}
                                parentProjectPage={this.displayProjectInformationHandler}
                                parentSprintsPage={this.displaySprintInformationHandler}
                                onShowUserStories={this.displayUserStoriesInformationHanlder}
                            />
                        </div> : null
                }
                {
                    this.state.displayUserStoryInformation === true ?
                        <div>
                            <UserStories
                                parentSprint={this.state.displaySprint}
                                userStoriesColumnStructure={userStoryColumnStructure}
                                userStories={this.state.displayUserStories}
                                userStoryAction={this.state.userStoryAction}
                                userStoryInfo={this.state.displayUserStory}
                                addUserStory={this.addUserStoryToSprint}
                                saveUserStory={this.saveUserStoryToProject}
                                parentSpringPage={this.displaySprintInformation}
                                onChange={this.onUserStoryDetailsChange.bind(this)}
                            />
                        </div> : null
                }

            </div>
        );
    }
}

export default Projects;