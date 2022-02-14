//Importing necessary modules
const fs = require("fs");
const inquirer = require("inquirer");

//Question arrays for enquirer
const managerQuestions = [
    {
        name: "name",
        type: "input",
        message: "Enter the team manager's name:"
    },
    {
        name: "id",
        type: "input",
        message: "What is their employee ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is their email?",
    },
    {
        name: "office",
        type: "input",
        message: "What is their office number?"
    },
]

const anotherEmployee = [
    {
        name: "another",
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Yes","No"]
    }
]

const menuQuestion = [
    {
        name: "employee",
        type: "list",
        message: "what type of employee would you like to add?",
        choices: ["Engineer", "Intern", "None"],
    }
]

const engineerQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is the engineer's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is their employee ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is the engineer's email?",
    },
    {
        name: "github",
        type: "input",
        message: "What is their GitHub username?"
    }
]

const internQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is the Intern's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is their employee ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is the intern's email?",
    },
    {
        name: "school",
        type: "input",
        message: "What school do they attend?"
    },
]

//function to render the HTML page
let employeeCard = "";
function renderHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div style="text-align: center" class="jumbotron jumbotron-fluid bg-danger text-light">
        <div class="container">
          <h1 style="font-weight: bolder" class="display-4">Our Team</h1>
          <!-- <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> -->
        </div>
    </div>
    <div class="container card-container row" style="justify-content: center; margin: auto;">
        ${data}
    </div>
    

</body>
</html>
    `
}

//Functions to generate the card for a manager or whatever other position is chosen
function generateManager(userAnswers) {
    return `
    <div class="card" style="width: 18rem; border: 0px; border: 3px solid lightgrey; margin: 30px">
            <div style="padding: 15px; border-radius: 2px 2px 0px 0px;" class="card-body bg-primary">
                <div style="text-align: center" class="header-container bg-primary text-light">
                    <h5 class="card-title bg-primary text-light">${userAnswers.name}</h5>
                    <h6 class="card-subtitle mb-2 bg-primary text-light">Manager</h6>
                </div>
                
            </div>
            <div style="margin-left: 20px; margin-right: 20px; margin-top: 35px; margin-bottom: 35px; border: 1px solid lightgray;" class="info-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${userAnswers.id}</li>
                    <li class="list-group-item">Email: ${userAnswers.email}</li>
                    <li class="list-group-item">Office #: ${userAnswers.office}</li>
              </ul>
            </div>  
          </div>
    `
}

function generateEngineer(userAnswers) {
    return `
    <div class="card" style="width: 18rem; border: 0px; border: 3px solid lightgrey; margin: 30px">
            <div style="padding: 15px; border-radius: 2px 2px 0px 0px;" class="card-body bg-primary">
                <div style="text-align: center" class="header-container bg-primary text-light">
                    <h5 class="card-title bg-primary text-light">${userAnswers.name}</h5>
                    <h6 class="card-subtitle mb-2 bg-primary text-light">Engineer</h6>
                </div>
                
            </div>
            <div style="margin-left: 20px; margin-right: 20px; margin-top: 35px; margin-bottom: 35px; border: 1px solid lightgray;" class="info-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${userAnswers.id}</li>
                    <li class="list-group-item">Email: ${userAnswers.email}</li>
                    <li class="list-group-item">GitHub: ${userAnswers.github}</li>
              </ul>
            </div>  
          </div>
    `
}

function generateIntern(userAnswers) {
    return `
    <div class="card" style="width: 18rem; border: 0px; border: 3px solid lightgrey; margin: 30px">
            <div style="padding: 15px; border-radius: 2px 2px 0px 0px;" class="card-body bg-primary">
                <div style="text-align: center" class="header-container bg-primary text-light">
                    <h5 class="card-title bg-primary text-light">${userAnswers.name}</h5>
                    <h6 class="card-subtitle mb-2 bg-primary text-light">Intern</h6>
                </div>
                
            </div>
            <div style="margin-left: 20px; margin-right: 20px; margin-top: 35px; margin-bottom: 35px; border: 1px solid lightgray;" class="info-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${userAnswers.id}</li>
                    <li class="list-group-item">Email: ${userAnswers.email}</li>
                    <li class="list-group-item">School: ${userAnswers.school}</li>
              </ul>
            </div>  
          </div>
    `
}


//Function to begin generating webpage
function generateCards() {
    inquirer.prompt(menuQuestion)
        .then ((menuQuestion) => {
            if (menuQuestion.employee === "Engineer") {
                inquirer.prompt(engineerQuestions)
                .then((engineerAnswers) => {
                    newEngineerCard =  generateEngineer(engineerAnswers);
                    employeeCard += newEngineerCard;
                    generateCards()
                })
            } else if (menuQuestion.employee === "Intern") {
                inquirer.prompt(internQuestions)
                .then((internAnswers) => {
                    newInternCard = generateIntern(internAnswers);
                    employeeCard += newInternCard
                    generateCards()
                })
            } else {
                fs.writeFile("dist/test.html", renderHTML(employeeCard), (err) => {
                    if(err) {
                        console.error(err);
                        return;
                    } 
                    console.log("File written successfully")
                })
            }
        })
}

function generateProfile() {
    inquirer.prompt(managerQuestions)
    .then ((answers) => {
        managerCard = generateManager(answers);
        console.log("Manger card: " + managerCard);
        employeeCard += managerCard;
        generateCards()
    })
    
}   

generateProfile()