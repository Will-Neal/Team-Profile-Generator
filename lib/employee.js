class Employee {
    constructor(employeeName, title, id, email) {
        this.name = employeeName;
        this.title = title;
        this.id = id;
        this.email = email;
    }

    getName = function(){
        return this.name;
    }

    getId = function(){
        return this.id;
    }

    getEmail = function(){
        return this.email;
    }

    getRole = function(){
        return "Employee";
    }
}

module.exports = Employee