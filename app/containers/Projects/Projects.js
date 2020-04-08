import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Project from '../../components/Project/Project';
import Sprint from '../../components/Project/Sprint/Sprint';
import UserStory from '../../components/Project/Sprint/UserStory/UserStory';

class Projects extends Component {
  state = {
      data: [
        { Project_Name: "Corona", Project_Status: 'Inprogress', Current_Stage: '50%', Start_Date: '12/Dec/2019', End_Date: 'Not Yet Decided' },
        { Project_Name: "Ebola", Project_Status: 'Completed', Current_Stage: '100%', Start_Date: '12/Dec/2020', End_Date: 'Not Yet Decided' },
        { Project_Name: "Hanta", Project_Status: 'Inprogress', Current_Stage: '10%', Start_Date: '12/Dec/2019', End_Date: 'Not Yet Decided' },
        { Project_Name: "SwineFlu", Project_Status: 'Completed', Current_Stage: '70%', Start_Date: '12/Dec/2019', End_Date: 'Not Yet Decided' },
        { Project_Name: "SpanishFlu", Project_Status: 'Completed', Current_Stage: '100%', Start_Date: '14/Jan/1920', End_Date: '' }
      ],
      projectSprintData: [
        { Project_Name: "Corona", Sprint_Name: 'Sprint1', User_Story: 'UserStory1A', Requirement_Analysis: 'InProgress', Coding: 'Open', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "Corona", Sprint_Name: 'Sprint1', User_Story: 'UserStory1B', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "Corona", Sprint_Name: 'Sprint2', User_Story: 'UserStory1C', Requirement_Analysis: 'Closed', Coding: 'Closed', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "Ebola", Sprint_Name: 'Sprint1', User_Story: 'UserStory2A', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "Ebola", Sprint_Name: 'Sprint2', User_Story: 'UserStory2B', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "Hanta", Sprint_Name: 'Sprint2', User_Story: 'UserStory2C', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "SwineFlu", Sprint_Name: 'Sprint1', User_Story: 'UserStory3A', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "SwineFlu", Sprint_Name: 'Sprint2', User_Story: 'UserStory3B', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "SwineFlu", Sprint_Name: 'Sprint3', User_Story: 'UserStory3C', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "SwineFlu", Sprint_Name: 'Sprint3', User_Story: 'UserStory3D', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "SpanishFlu", Sprint_Name: 'Sprint1', User_Story: 'UserStory4A', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "SpanishFlu", Sprint_Name: 'Sprint2', User_Story: 'UserStory4B', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' },
        { Project_Name: "Corona", Sprint_Name: 'Sprint3', User_Story: 'UserStory1D', Requirement_Analysis: 'Closed', Coding: 'InProgress', Unit_Testing: 'Open', Code_Review: 'Open', Testing: 'Open', Status: 'Open' }
      ],
      userStoryData: [
        { Project_Name: "Corona", Sprint_Name: 'Sprint1', User_Story: 'UserStory1A', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "Corona", Sprint_Name: 'Sprint1', User_Story: 'UserStory1B', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "Corona", Sprint_Name: 'Sprint2', User_Story: 'UserStory1C', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "Ebola", Sprint_Name: 'Sprint1', User_Story: 'UserStory2A', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "Ebola", Sprint_Name: 'Sprint2', User_Story: 'UserStory2B', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "Hanta", Sprint_Name: 'Sprint1', User_Story: 'UserStory2C', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "SwineFlu", Sprint_Name: 'Sprint1', User_Story: 'UserStory3A', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "SwineFlu", Sprint_Name: 'Sprint2', User_Story: 'UserStory3B', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "SwineFlu", Sprint_Name: 'Sprint3', User_Story: 'UserStory3C', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "SwineFlu", Sprint_Name: 'Sprint3', User_Story: 'UserStory3D', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "SpanishFlu", Sprint_Name: 'Sprint1', User_Story: 'UserStory4A', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "SpanishFlu", Sprint_Name: 'Sprint2', User_Story: 'UserStory4B', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' },
        { Project_Name: "Corona", Sprint_Name: 'Sprint3', User_Story: 'UserStory1D', Developer: 'Joe', Tester: 'Bob', Acceptance_Criteria: 'Windows 2016 Server', Total_Hr: '20D' }
      ],
      displayProjectTable: true,
      displayProjectInformation: false,
      displaySprintInfromation: false,
      displayUserStoryInformation: false,
      displayProject: null,
      displaySprints: [],
      displayUserStory: null
  };

  displayUserStoryInformationHanlder = (projectName, sprintName, userStory) => {
      let displayUserStoryInfo = {
        ...this.state.displayUserStory
      };
      const userStoriesAvailable = this.state.userStoryData;
      var i;
      for (i = 0; i < userStoriesAvailable.length; i++) {
        if (userStoriesAvailable[i].Project_Name === projectName
        userStoriesAvailable[i].Sprint_Name === sprintName &&
        userStoriesAvailable[i].User_Story === userStory
          displayUserStoryInfo = userStoriesAvailable[i];
          break;
        }
      }
      this.setState({
        displayUserStory: displayUserStoryInfo,
        displayProjectInformation: false,
        displayProjectTable: false,
        displaySprintInfromation: false,
        displayUserStoryInformation: true
      });
  };

  displaySprintInformationHandler = projectName => {
      let displaySprintInfo = {
        ...this.state.displaySprints
      };
      const sprintsAvailable = this.state.projectSprintData;
      var j;
      displaySprintInfo = [];
      for (j = 0; j < sprintsAvailable.length; j++) {
        if (sprintsAvailable[j].Project_Name === projectName) {
          displaySprintInfo.push(sprintsAvailable[j]);
        }
      }
      this.setState({
        displaySprints: displaySprintInfo,
        displayProjectInformation: false,
        displayProjectTable: false,
        displaySprintInfromation: true,
        displayUserStoryInformation: false
      });
  };

  displayProjectInformationHandler = projectName => {
      let displayProjectInfo = {
        ...this.state.displayProject
      };

      const projectsAvailable = this.state.data;
      var i;
      for (i = 0; i < projectsAvailable.length; i++) {
        if (projectsAvailable[i].Project_Name === projectName) {
          displayProjectInfo = projectsAvailable[i];
          break;
        }
      }
      this.setState({
        displayProject: displayProjectInfo,
        displayProjectInformation: true,
        displayProjectTable: false,
        displaySprintInfromation: false,
        displayUserStoryInformation: false
      });
  };

  render() {
      const columns = [
        {
          name: 'Project_Name',
          selector: 'Project_Name',
          sortable: true,
          cell: row => <a onClick={() => this.displayProjectInformationHandler(row.Project_Name)} >{row.Project_Name} </a>
        },
        {
          name: 'Project_Status',
          selector: 'Project_Status',
          sortable: true,
        },
        {
          name: 'Current_Stage',
          selector: 'Current_Stage',
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
      ];

      const sprintColumnStrucutre = [
        {
          name: 'Project_Name',
          selector: 'Project_Name',
          show: false,
          sortable: true,
        },
        {
          name: 'Sprint_Name',
          selector: 'Sprint_Name',
          sortable: true,
        },
        {
          name: 'User_Story',
          selector: 'User_Story',
          sortable: true,
          cell: row => <a onClick={() => this.displayUserStoryInformationHanlder(this.state.displayProject.Project_Name,row.Sprint_Name,row.User_Story)} >{row.User_Story} </a>             
        },
        {
          name: 'Requirement_Analysis',
          selector: 'Requirement_Analysis',
          sortable: true,
        },
        {
          name: 'Coding',
          selector: 'Coding',
          sortable: true,
        },
        {
          name: 'Unit_Testing',
          selector: 'Unit_Testing',
          sortable: true,
        },
        {
          name: 'Code_Review',
          selector: 'Code_Review',
          sortable: true
        },
        {
          name: 'Testing',
          selector: 'Testing',
          sortable: true
        },
        {
          name: 'Status',
          selector: 'Status',
          sortable: true
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
                  data={this.state.data}
                />
                <center>
                  <Button variant="primary"> Perform Data Analysis</Button>
                  <Button variant="success"> Add a New Project</Button>
                </center>
              </div> :
              null
          }
          {
            this.state.displayProjectInformation === true ?
              <div>
                <Project projectInfo={this.state.displayProject} springInformationHanlder={this.displaySprintInformationHandler} />
              </div> : null
          }
          {
            this.state.displaySprintInfromation === true ?
              <div>
                <Sprint sprintColumnStrucutre={sprintColumnStrucutre} sprintInformation={this.state.displaySprints} />
              </div> : null
          }
          {
            this.state.displayUserStoryInformation === true ?
              <div>
                <UserStory userStoryInfo={this.state.displayUserStory}/>
              </div> : null
          }
        </div>
      );
  }
}

export default Projects;
