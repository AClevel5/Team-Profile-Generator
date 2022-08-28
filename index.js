
//Package/File Requires
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

// Common Question(s)
const repeatQuestions = [
    {
        type: "input",
        message: "Plese enter your name",
        name: "name",
    },
    {
        type: "input",
        message: "Plese enter your ID",
        name: "id",
    },
    {
        type: "input",
        message: "Plese enter your email",
        name: "email",
    },
];

//Manager Question(s)
const managerQuestions = [
    {
        type: "input",
        message: "Plese enter your office number",
        name: "officeNumber",
    }
];

//Engineer Question(s)
const engineerQuestions = [
    {
        type: "input",
        message: "Plese enter your GitHub Username",
        name: "gitHubUserName",
    }
];

//Intern Question(s)
const internQuestions = [
    {
        type: "input",
        message: "Plese enter your School",
        name: "school",
    }
];

//Final Question to add another employee or finish building team
const finalQuestions = [
    {
        type: "list",
        message: "Please add an Engineer, Intern, or select Finished building team",
        choices: ["Engineer", "Intern", "Finished Building Team"],
        name: "choice",
    },
];

// Start with Manager prompt common questions and manager question
// After manager prompt for select employee from list

//Engineer prompt name id email and github
// than return to list

//intern prompt name id email an github
// than return to list

//Finish team option


//Create a HTML document template

// append with info from employee object