const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./js/manager");
const Engineer = require("./js/engineer");
const Intern = require("./js/intern");

var startingHtml = `
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

function loadEngineerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineer's name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Engineer's id:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Engineer's email:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Engineer's GitHub username:",
            name: "github"
        }]).then((ans) => {
            // create manager
            const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
            // append manager's html to startingHtml
            startingHtml += engineer.getHtmlContent();
        }).then(loadMenuPrompt);
}

function loadInternPrompt() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Intern's id:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Intern's email:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Intern's school:",
            name: "school"
        }]).then((ans) => {
            // create manager
            const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
            // append manager's html to startingHtml
            startingHtml += intern.getHtmlContent();
        }).then(loadMenuPrompt);
}

function loadMenuPrompt() {
    inquirer.prompt([{
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
        name: 'menu'
    }]).then((ans) => {
        if (ans.menu == 'Add Engineer') {
            loadEngineerPrompt();
        } else if (ans.menu == 'Add Intern') {
            loadInternPrompt();
        } else {
            // assemble the finalHtml
            const finalHtml = startingHtml + endingHtml;
            // Write finalHtml to index.html
            fs.writeFile('index.html', finalHtml, (err) => {
                    if (err) { throw err };
            });
        }
    });
}

function beginPrompts() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager's name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Manager's id:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Manager's email:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Manager's office number:",
            name: "officeNum"
        }]).then((ans) => {
            // create manager
            const manager = new Manager(ans.name, ans.id, ans.email, ans.officeNum);
            // append manager's html to startingHtml
            startingHtml += manager.getHtmlContent();
        }).then(loadMenuPrompt);
}

beginPrompts();
