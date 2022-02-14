const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')

describe("Engineer Class", () => {
    describe('github property creation', () => {
        it("should create a property with the github username value passed in", ()=>{
            const engineer = new Engineer("Sam", "sam-github", 5, "sam@management.com");
            expect(engineer.github).toBe("sam-github")
        });
        
    });
    describe('name property creation', () => {
        it("should create a property with the name value passed in", ()=>{
            const engineer = new Engineer("Tom", "tom-github", 1, "tom@management.com");
            expect(engineer.name).toBe("Tom")
        });
        
    });
    describe('title property creation', () => {
        it("should inherit a property title with value Engineer without the title property needing to be passed in", () => {
            const engineer = new Engineer("Larry", "larry-github", 2, "larry@engineering.com");
            expect(engineer.title).toBe("Engineer")
        });

    })
    describe('id property creation', () => {
        it("should create a property with the id number passed in", () => {
            const engineer = new Engineer("Sasha", "sasha-github", 3, "sasha@unpaidintern.com");
            expect(engineer.id).toBe(3)
        })
    })
    describe('email property creation', () => {
        it("should create a property with the email address passed in", () => {
            const engineer = new Engineer("Lena", "lena-github", 4, "lena@uppermanagement.com");
            expect(engineer.email).toBe("lena@uppermanagement.com")
        })
    })
})