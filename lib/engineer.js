const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, github, id, email){
        super(employeeName, "Engineer", id, email);
        this.github = github;
    }

    getGithub = function(){
        return this.github
    }

    getRole = function(){
        return "Engineer"
    }
}

module.exports = Engineer