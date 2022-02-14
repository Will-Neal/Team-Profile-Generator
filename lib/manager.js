const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, office, id, email){
        super(employeeName, "Manager", id, email);
        this.office = office;
    }

    getOfficeNumber = function(){
        return this.office;
    }

    getRole = function(){
        return "Manager"
    }
}

module.exports = Manager