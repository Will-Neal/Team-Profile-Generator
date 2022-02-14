const Employee = require('../lib/employee')

describe("Employee Class", () => {
    describe('name property creation', () => {
        it("should create a property with the name value passed in", ()=>{
            const employee = new Employee("Tom", "Manager", 1, "tom@management.com");
            expect(employee.name).toBe("Tom")
        });
        
    });
    describe('title property creation', () => {
        it("should create a property with the title property passed in", () => {
            const employee = new Employee("Larry", "Engineer", 2, "larry@engineering.com");
            expect(employee.title).toBe("Engineer")
        });

    })
    describe('id property creation', () => {
        it("should create a property with the id number passed in", () => {
            const employee = new Employee("Sasha", "Intern", 3, "sasha@unpaidintern.com");
            expect(employee.id).toBe(3)
        })
    })
    describe('email property creation', () => {
        it("should create a property with the email address passed in", () => {
            const employee = new Employee("Lena", "Manager", 4, "lena@uppermanagement.com");
            expect(employee.email).toBe("lena@uppermanagement.com")
        })
    })
    describe('getName() method', () => {
        it("should return the name passed in when creating the employee object", () => {
            const employee = new Employee("Alex", "Intern", 6, "alex@unpaidintern.com");
            employeeName = employee.getName();
            expect(employeeName).toBe("Alex")
        })
    })
    describe('getId() method', () => {
        it("should return the ID passed in when creating the employee object", () => {
            const employee = new Employee("Alex", "Intern", 6, "alex@unpaidintern.com");
            id = employee.getId();
            expect(id).toBe(6)
        })
    })
    describe('getEmail() method', () => {
        it("should return the email passed in when creating the employee object", () => {
            const employee = new Employee("Alex", "Intern", 6, "alex@unpaidintern.com");
            email = employee.getEmail();
            expect(email).toBe("alex@unpaidintern.com")
        })
    })
    describe('getRole() method', () => {
        it("should return Employee later to be overwritten by what is passed in through child objects", () => {
            const employee = new Employee("Ian", "Wesleyan", 7, "ian@unpaidintern.com");
            role = employee.getRole();
            expect(role).toBe("Employee")
        })
    })
})