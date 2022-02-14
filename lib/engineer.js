const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, github, id, email){
        super(employeeName, "Engineer", id, email);
        this.github = github;
    }
}

module.exports = Engineer