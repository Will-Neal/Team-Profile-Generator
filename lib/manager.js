const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, officeNum, id, email){
        super(employeeName, "Engineer", id, email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager