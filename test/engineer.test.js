const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')

describe("Engineer Class", () => {
    describe('github property creation', () => {
        it("should create a property with the github username value passed in", ()=>{
            const engineer = new Engineer("Sam", "sam-github", 5, "sam@engineering.com");
            expect(engineer.github).toBe("sam-github")
        });
        
    });
    describe('name property creation', () => {
        it("should create a property with the name value passed in", ()=>{
            const engineer = new Engineer("Tom", "tom-github", 1, "tom@engineering.com");
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
            const engineer = new Engineer("Sasha", "sasha-github", 3, "sasha@engineering.com");
            expect(engineer.id).toBe(3)
        })
    })
    describe('email property creation', () => {
        it("should create a property with the email address passed in", () => {
            const engineer = new Engineer("Lena", "lena-github", 4, "lena@engineering.com");
            expect(engineer.email).toBe("lena@engineering.com")
        })
    })
    describe('getGithub() method', () => {
        it("should return the GitHub username passed in when creating the engineer object", () => {
            const engineer = new Engineer("Alex", "alex-github", 6, "alex@engineering.com");
            github = engineer.getGithub();
            expect(github).toBe("alex-github")
        })
    })
    describe('getRole() method', () => {
        it("should return Engineer overriding Employee", () => {
            const engineer = new Engineer("Ian", "ian-github", 7, "ian@engineering.com");
            role = engineer.getRole();
            expect(role).toBe("Engineer")
        })
    })
})