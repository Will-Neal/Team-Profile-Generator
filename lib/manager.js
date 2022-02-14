const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, office, id, email){
        super(employeeName, "Manager", id, email);
        this.office = office;
    }
}

module.exports = Manager