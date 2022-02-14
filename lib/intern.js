const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeName, school, id, email){
        super(employeeName, "Intern", id, email);
        this.school = school;
    }
}

module.exports = Intern