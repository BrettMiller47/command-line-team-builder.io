const fs = require("fs");
const inquirer = require("inquirer");
const { start } = require("repl");
const { Manager } = require("./employees");
const { Engineer } = require("./employees");
const { Intern } = require("./employees");

const startingHtmlContent = `
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
    </header>
    <!-- header is rootEl for Manager card -->
    <!-- Manager card is rootEl for other team members -->
    <section id="rootElTeam" class="row p-0 d-flex justify-content-center">
    </section>
    </main>    
</body>
<script src="team.js"></script>
</html>
`;

// Create index.html with starting template
fs.writeFile('index.html', startingHtmlContent, (err) => {
    if (err) { throw err };
});
// Add the manager to the DOM
addManager();
// While adding members
    // prompt user to decide Engineer or Intern
    // if engineer...
        // add engineer tp the DOM
    // if Intern...
        // add intern to the DOM

// Get Manager info and create their HTML card
function addManager() {
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
            },
        ]).then((res) => 
            new Manager(res.name, res.id, res.email, res.officeNum)
        ).then((manager) => {
            let htmlContent = manager.getHtmlContent();
            console.log(htmlContent);
        });
        
}

// Get Engineer info and create their HTML card
function getEngineerInfo() {
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
        ]).then((res) => 
            new Engineer(res.name, res.id, res.email, res.githubName)
        ).then((engineer) => {
            let htmlContent = engineer.getHtmlContent();
            console.log(htmlContent);
        });
}

// Get Intern info and create their HTML card
function getInternInfo() {
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
                name: "officeNum"
            },
        ]).then((res) => 
            new Intern(res.name, res.id, res.email, res.school)
        ).then((intern) => {
            let htmlContent = intern.getHtmlContent();
            console.log(htmlContent);
        });
}