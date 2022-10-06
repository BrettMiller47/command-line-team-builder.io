const fs = require("fs");
const async = require('async');
const { get } = require("https");
const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
require('./js/employee');
const Manager = require("./js/manager");
const Engineer = require("./js/engineer");
const Intern = require("./js/intern");

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

var teamHtml = ``;

// TODO: get manager prompt to show
// ! .then() --------------------
// inquirer
//     .prompt(
//         {
//             type: "input",
//             message: "Enter Manager's name:",
//             name: "name"
//         },
//         {
//             type: "input",
//             message: "Enter Manager's id:",
//             name: "id"
//         },
//         {
//             type: "input",
//             message: "Enter Manager's email:",
//             name: "email"
//         },
//         {
//             type: "input",
//             message: "Enter Manager's office number:",
//             name: "office"
//         }
//     ).then((answers) => {
//         const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
//         managerHtml = manager.getHtmlContent;
//         inquirer.prompt({
//             type: 'list',
//             message: 'What would you like to do?',
//             choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
//             name: 'menu'
//         }).then((answer) => {
//             if (answer.menu == 'Add Engineer') {
//                 const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubName);
//                 engineerHtml = engineer.getHtmlContent;
//                 teamHtml += engineerHtml;
//                 inquirer.prompt({
//                     type: 'list',
//                     message: 'What would you like to do?',
//                     choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
//                     name: 'menu'
//                 }).then((answer) => {
//                     if (answer.menu == 'Add Engineer') {
//                         const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubName);
//                         engineerHtml = engineer.getHtmlContent;
//                         teamHtml += engineerHtml;
//                     } else if (answer.menu == 'Add Intern') {
//                         const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//                         internHtml = intern.getHtmlContent;
//                         teamHtml += internHtml;
//                     } else {
//                         const finalHtml = startingHtml + managerHtml + teamHtml + endingHtml;
//                         fs.writeFile('index.html', finalHtml, (err) => {
//                             if (err) { throw err };
//                         });
//                     }
//                 });
//             } else if (answer.menu == 'Add Intern') {
//                 const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//                 internHtml = intern.getHtmlContent;
//                 teamHtml += internHtml;
//                 inquirer.prompt({
//                     type: 'list',
//                     message: 'What would you like to do?',
//                     choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
//                     name: 'menu'
//                 }).then((answer) => {
//                     if (answer.menu == 'Add Engineer') {
//                         const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubName);
//                         engineerHtml = engineer.getHtmlContent;
//                         teamHtml += engineerHtml;
//                     } else if (answer.menu == 'Add Intern') {
//                         const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//                         internHtml = intern.getHtmlContent;
//                         teamHtml += internHtml;
//                     } else {
//                         const finalHtml = startingHtml + managerHtml + teamHtml + endingHtml;
//                         fs.writeFile('index.html', finalHtml, (err) => {
//                             if (err) { throw err };
//                         });
//                     }
//                 });
//             } else {
//                 // assemble the finalHtml
//                 const finalHtml = startingHtml + managerHtml + teamHtml + endingHtml;

//                 // Write finalHtml to index.html
//                 fs.writeFile('index.html', finalHtml, (err) => {
//                      if (err) { throw err };
//                 });
//             }
//         });
//     });
// ! ----------------------------




// ! ASYNC ----------------------
// main();
// async function main() {
//     await loadManagerPrompt();
// };

// async function loadManagerPrompt() {
//     const { name, id, email, office} = await inquirer.prompt(
//         {
//             type: "input",
//             message: "Enter Manager's name:",
//             name: "name"
//         },
//         {
//             type: "input",
//             message: "Enter Manager's id:",
//             name: "id"
//         },
//         {
//             type: "input",
//             message: "Enter Manager's email:",
//             name: "email"
//         },
//         {
//             type: "input",
//             message: "Enter Manager's office number:",
//             name: "officeNum"
//         }
//     );
// }
// ! ---------------------------
