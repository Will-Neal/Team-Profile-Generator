const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeName, school, id, email){
        super(employeeName, "Intern", id, email);
        this.school = school;
    }

    getSchool = function(){
        return this.school;
    }

    getRole = function(){
        return "Intern"
    }
}

module.exports = Intern