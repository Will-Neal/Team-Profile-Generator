const fs = require("fs");
var inquirer = require("inquirer");

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
        ${data}
      </div>
    

</body>
</html>
    `
}

employeeQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is the employee's name?"
    },
    {
       name: "title",
       type: "list",
       message: "What is the employee's job title", 
       choices: ["Manager", "Engineer", "Inter"]
    },
    {
        name: "email",
        type: "input",
        message: "What is the employee's email?",
    },
    {
        name: "github",
        type: "id",
        message: "What is their employee ID?",
    }
]