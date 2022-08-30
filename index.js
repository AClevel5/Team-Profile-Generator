
//Package/File Requires
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require('./utils/generate_html');
const generateEndHTML = require('./utils/generate_EndHtml')
const generateManager = require('./utils/generate_manager');
const generateEngineer = require('./utils/generate_engineer');
const generateIntern = require('./utils/generate_intern');
const fileName = "index.html";

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

//Logic to handle answer from Final Question (Create Engineer, Intern, or Finish)
async function addInternOrEngineer(questions) {
    await inquirer.prompt(questions).then((answer) => {
        if (answer.selection === "Intern") {
            createIntern()
        }
        else if (answer.selection === "Engineer") {
            createEngineer()
        }
        else if (answer.selection === "Finished Building Team") {
            appendToFile(fileName, generateEndHTML())
        }
    })
}

async function writeToFile(fileName, data) {
    await fs.writeFile(fileName, data, (error) => {
        if (error) throw error;
    })
};

async function appendToFile(fileName, data) {
    await fs.appendFile(fileName, data, (error) => {
        if (error) throw error;
        // console.log("Data Saved Successfully");


    })
};


// App will start by calling this function. Asks Manager questions to generate the manager
async function createManager() {
    const managerQs = [
        ...repeatQuestions,
        ...managerQuestions,
    ];
    await writeToFile(fileName, generateHTML());
    await inquirer.prompt(managerQs).then((response) => {
        let managerData = new Manager(response.name, response.id, response.email, response.officeNumber);
        appendToFile(fileName, generateManager(managerData));
        addInternOrEngineer(finalQuestions);
    }
    )
};

// Create Engineer Function
async function createEngineer() {
    const engineerQs = [
        ...repeatQuestions,
        ...engineerQuestions,
    ];
    await inquirer.prompt(engineerQs).then((response) => {
        let engineerData = new Engineer(response.name, response.id, response.email, response.gitHubUserName)
        appendToFile(fileName, generateEngineer(engineerData));
        addInternOrEngineer(finalQuestions);
    }
    )

};

// Create Intern Function
async function createIntern() {
    const internQs = [
        ...repeatQuestions,
        ...internQuestions,
    ];
    await inquirer.prompt(internQs).then((response) => {
        let internData = new Intern(response.name, response.id, response.email, response.school)
        appendToFile(fileName, generateIntern(internData));
        addInternOrEngineer(finalQuestions);
    }
    )
};

// Calls this function to kick off app
createManager();
