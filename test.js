const fs = require("fs");
const inquirer = require("inquirer");
const { Manager } = require("./employees");
const { Engineer } = require("./employees");
const { Intern } = require("./employees");

// ---- ---- Main Program Start ---- ----
// prompt for manager
async function getManagerHtml() {
  await inquirer
    .prompt([
        {
            type: "input",
            message: "Enter manager's name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter manager's ID number:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter manager's email:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter manager's office number:",
            name: "officeNum"
        }
    ])
    .then((ans) => new Manager)
    .then((mgr) => mgr.getHtmlContent());  
} 

console.log(getManagerHtml());

// ---- ---- Main Program End ---- ----


// ---- ---- Functions ---- ----
/**
 * Prompt's user to enter information about a manager then return's the constructed manager promise object
 * Requires Inquirer.
 */
function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter manager's name:",
                name: "name"
            },
            {
                type: "input",
                message: "Enter manager's ID number:",
                name: "id"
            },
            {
                type: "input",
                message: "Enter manager's email:",
                name: "email"
            },
            {
                type: "input",
                message: "Enter manager's office number:",
                name: "officeNum"
            }
        ])
        .then((res) => new Manager(res.name, res.id, res.email, res.officeNum))   
}

/**
 * Prompt's user to enter information about an engineer then return's the constructed engineer promise object
 * Requires Inquirer.
 */
function createEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter engineer's name:",
                name: "name"
            },
            {
                type: "input",
                message: "Enter engineer's ID number:",
                name: "id"
            },
            {
                type: "input",
                message: "Enter engineer's email:",
                name: "email"
            },
            {
                type: "input",
                message: "Enter engineer's GitHub profile name:",
                name: "githubName"
            },
        ])
        .then((res) => new Engineer(res.name, res.id, res.email, res.githubName))
}

/**
 * Prompt's user to enter information about an intern then return's the constructed intern promise object
 * Requires Inquirer.
 */
function createIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter intern's name:",
                name: "name"
            },
            {
                type: "input",
                message: "Enter intern's ID number:",
                name: "id"
            },
            {
                type: "input",
                message: "Enter intern's email:",
                name: "email"
            },
            {
                type: "input",
                message: "Enter intern's school:",
                name: "school"
            },
        ])
        .then((res) => new Intern(res.name, res.id, res.email, res.school))
}