const Employee = require('../lib/employee')
const Intern = require('../lib/intern')

describe("Intern Class", () => {
    describe('school property creation', () => {
        it("should create a property with the school value passed in", ()=>{
            const intern = new Intern("Sam", "University of Texas at Austin", 5, "sam@unpaidintern.com");
            expect(intern.school).toBe("University of Texas at Austin")
        });
        
    });
    describe('name property creation', () => {
        it("should create a property with the name value passed in", ()=>{
            const intern = new Intern("Tom", "BYU", 1, "tom@unpaidintern.com");
            expect(intern.name).toBe("Tom")
        });
        
    });
    describe('title property creation', () => {
        it("should inherit a property title with the value Manager without the title property beingpassed in", () => {
            const intern = new Intern("Larry", "Fordham", 2, "larry@unpaidintern.com");
            expect(intern.title).toBe("Intern")
        });

    })
    describe('id property creation', () => {
        it("should create a property with the id number passed in", () => {
            const intern = new Intern("Sasha", "UCLA", 3, "sasha@unpaidintern.com");
            expect(intern.id).toBe(3)
        })
    })
    describe('email property creation', () => {
        it("should create a property with the email address passed in", () => {
            const intern = new Intern("Lena", "NYU", 4, "lena@unpaidintern.com");
            expect(intern.email).toBe("lena@unpaidintern.com")
        })
    })
})