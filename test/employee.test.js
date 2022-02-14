const Employee = require('../lib/employee')

describe("Employee Class", () => {
    describe('name property creation', () => {
        it("should create a property with the name value passed in", ()=>{
            const employee = new Employee("Tom", "Manager", "1", "tom@management.com");
        
            expect(employee.name).toBe("Tom")
        })
        
    })
})