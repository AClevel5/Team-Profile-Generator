
//Package/File Requires
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const { exit } = require('process');
const generateManager = require('./utils/generate_manager');
const generateEngineer = require('./utils/generate_engineer');
const finalOutput = "index.html";

//Empty Array to contain Employees
let employees = [];

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
        name: "selection",
    }
];

async function addInternOrEngineer(questions) {
    await inquirer.prompt(questions).then((answer) => {
        console.log(answer)
        if (answer.selection === "Intern") {
            createIntern()
        }
        else if (answer.selection === "Engineer") {
            createEngineer()
        }
        else if (answer.selection === "Finished Building Team") {
            exit()
        }
    })
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data, () => {
        if (error) throw error;
        console.log("Data Saved Successfully");


    })
};

function appendToFile(fileName, data) {
    return fs.appendFileSync(path.join(process.cwd(), fileName), data, () => {
        if (error) throw error;
        console.log("Data Saved Successfully");


    })
};

// Start with Manager prompt common questions and manager question
// After manager prompt for select employee from list
async function createManager() {
    const managerQs = [
        ...repeatQuestions,
        ...managerQuestions,
    ];
    console.log(managerQs);

    await inquirer.prompt(managerQs).then((response) => {
        // employees.push(
        //     new Manager(
        //         response.name,
        //         response.id,
        //         response.email,
        //         response.officeNumber,
        //     )
        // )
        let managerData = new Manager(reponse.name, response.id, response.email, response.officeNumber)
        writeToFile(fileName, generateManager(managerData))
        addInternOrEngineer(finalQuestions)
    }
    )

};

async function createEngineer() {
    const engineerQs = [
        ...repeatQuestions,
        ...engineerQuestions,
    ];
    console.log(engineerQs);
    await inquirer.prompt(engineerQs).then((response) => {
        employees.push(
            new Engineer(
                response.name,
                response.id,
                response.email,
                response.gitHubUserName,
            )
        )
        addInternOrEngineer(finalQuestions)
    }
    )

};

async function createIntern() {
    const internQs = [
        ...repeatQuestions,
        ...internQuestions,
    ];
    console.log(internQs);
    await inquirer.prompt(internQs).then((response) => {
        employees.push(
            new Intern(
                response.name,
                response.id,
                response.email,
                response.school,
            )
        )
        addInternOrEngineer(finalQuestions)
    }
    )

};




createManager();



//Engineer prompt name id email and github
// than return to list

//intern prompt name id email an github
// than return to list

//Finish team option


//Create a HTML document template

// append with info from employee object