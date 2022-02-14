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
})