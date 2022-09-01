const fs = require("fs");
const { get } = require("https");
const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
const { Manager } = require("./employees");
const { Engineer } = require("./employees");
const { Intern } = require("./employees");

// ---- ---- Main Program Start ---- ----
// create manager's htmlContent
const manager = createManager();
const managerHtml = manager.getHtmlContent();

// Add each engineer's and/or intern's HTML to teamHtml
var teamHtml = ``;
var isAnotherTeamMember = false;
while (isAnotherTeamMember) {
    inquirer
        .prompt({
            type: "list",
            message: "Menu",
            choices: ['Add Engineer', 'Add Intern', 'All team members added'],
            name: "menu"
        }).then((ans) => {            
            if (ans.menu == 'Add Engineer') {
                // add engineer's HTML content to teamHtml
                let engineer = createEngineer();
                teamHtml += engineer.getHtmlContent();
            
            } else if (ans.menu == 'Add Intern') {
                // add intern's HTML content to teamHtml
                let intern = createIntern();
                teamHtml += intern.getHtmlContent();
            
            } else if (ans.menu == 'All team members added') {
                isAnotherTeamMember = false;
            }
        });
}

// declare the startingHtml and endingHtml
const startingHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>Team</title>
</head>
<body class="container-fluid m-0 p-0">
    <header id="rootElManager>" class="row col-12 m-0 p-0 bg-dark text-light text-center">
        <h1>My Team</h1>
    </header>`;
const endingHtml = `
</body>
<script src="team.js"></script>
</html>
`;

// assemble the finalHtml
const finalHtml = startingHtml + managerHtml + teamHtml + endingHtml;

// Write finalHtml to index.html
fs.writeFile('index.html', finalHtml, (err) => {
    if (err) { throw err };
});
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