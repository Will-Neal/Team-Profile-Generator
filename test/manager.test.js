const Employee = require('../lib/employee')
const Manager = require('../lib/manager')

describe("Manager Class", () => {
    describe('office property creation', () => {
        it("should create a property with the office number value passed in", ()=>{
            const manager = new Manager("Sam", "555-555-5555", 5, "sam@management.com");
            expect(manager.office).toBe("555-555-5555")
        });
        
    });
    describe('name property creation', () => {
        it("should create a property with the name value passed in", ()=>{
            const manager = new Manager("Tom", "tom-github", 1, "tom@management.com");
            expect(manager.name).toBe("Tom")
        });
        
    });
    describe('title property creation', () => {
        it("should inherit a property title with the value Manager without the title property beingpassed in", () => {
            const manager = new Manager("Larry", "larry-github", 2, "larry@engineering.com");
            expect(manager.title).toBe("Manager")
        });

    })
    describe('id property creation', () => {
        it("should create a property with the id number passed in", () => {
            const manager = new Manager("Sasha", "sasha-github", 3, "sasha@unpaidintern.com");
            expect(manager.id).toBe(3)
        })
    })
    describe('email property creation', () => {
        it("should create a property with the email address passed in", () => {
            const manager = new Manager("Lena", "lena-github", 4, "lena@uppermanagement.com");
            expect(manager.email).toBe("lena@uppermanagement.com")
        })
    })
})