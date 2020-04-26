const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Project_Phase_Schema = new Schema(
    {
        Phase_Name: String,
        Hours_Spent: Number,
        Current_Status: String
    }
);

const User_Story_Schema = new Schema(
    {
        User_Story_Name: String,
        Developer_Name: String,
        Tester_Name: String,
        Acceptance_Criteria: String,
        Total_Hours: Number,
        Phase_Details: [Project_Phase_Schema]
    }
);

const Sprint_Information_Schema = new Schema(
    {
        Sprint_Phase: String,
        Start_Date: Date,
        End_Date: Date,
        User_Stories: [User_Story_Schema]
    }
);

const Project_Schema = new Schema(
    {
        Project_Name: String,
        Client_Name: String,
        Start_Date:Date,
        End_Date:Date,
        Project_Type:String,
        Project_Sprints :[Sprint_Information_Schema]
    }, {
    timestamps: true,
});

const Projects = mongoose.model('Projects',Project_Schema);

module.exports = Projects;