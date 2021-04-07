const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');


const inquirer = require('inquirer');
const fs = require('fs')


const myTeam = []

//add team manager
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your managers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your managers id number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your managers office number?',
            name: 'officeNumber'
        },
    ])
        .then(function(data) {
            const name = data.name;
            const id= data.id;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const manager = new Manager(name, id, email, officeNumber);
            myTeam.push(manager);
            addNewTeamMember();
        })
}

addManager();

//ask if they would like to add a new team member
function addNewTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            choices: [
                'No, complete team',
                'Add intern',
                'Add engineer',
            ],
            name: 'addNewMember'

        }
    ])
        .then(function(data) {
            if (data.addNewMember === 'Add engineer') {
                addEngineer();
            } else if (data.addNewMember === 'Add intern') {
                addIntern();
            } else {generateHtml()}
        });
}

//add new engineer
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Engineers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your Engineers id number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your Engineers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your Engineers Github username?',
            name: 'github'
        },
    ])
        .then(function(data) {
            const name = data.name;
            const id= data.id;
            const email = data.email;
            const github = data.github;
            const engineer = new Engineer(name, id, email, github);
            myTeam.push(engineer);
            addNewTeamMember();
        })
}

//Add new Intern
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Interns name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your Interns id number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your Interns email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your Interns school?',
            name: 'school'
        },
    ])
        .then(function(data) {
            const name = data.name;
            const id= data.id;
            const email = data.email;
            const school = data.school;
            const intern = new Intern(name, id, email, school);
            myTeam.push(intern);
            console.log(myTeam);
            addNewTeamMember();
            
        })
}


let teamMembersFile;


function generateHtml() {
    const htmlArray= [];
    const mainHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Team Members</title>
</head>
<body>
    <header><h1>My Team</h1></header>
    <section class='container'>
        
    </section>
    
</body>
</html>`;
    htmlArray.push(mainHtml);
    
    for (let i = 0; i < myTeam.length; i++) {
        let newCard = `<div class='employee-card'>
        <div class='employee-name-role'>
            <h3>${myTeam[i].name}</h3>
            <h4>${myTeam[i].role}</h4>
        </div>
        <div class='employee-info'>
            <p class='id'>${myTeam[i].id}</p>
            <p class='email'>${myTeam[i].email}</p>`
        if (myTeam[i].officeNumber) {
            newCard += `<p>Office Number:${myTeam[i].officeNumber}</p>`
        } else if (myTeam[i].github) {
            newCard += `<p>github:${myTeam[i].github}</p>`
        } else if (myTeam[i].school) {
            newCard += `<p>School:${myTeam[i].school}</p>`
        }
        newCard += `</div>
        </div>`
        htmlArray.push(newCard);
    }
        const closingHtml = `
        </div>
        </body>
        </html>`

        htmlArray.push(closingHtml);

        fs.writeFile('index.html', htmlArray.join(''), (err) => err? console.error(err) : console.log("Success!"))
    
    
    
}

