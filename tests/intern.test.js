const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should make a new object taking in 4 arguments (Name, Email, ID & School) ", () => {
            const intern = new Intern("Alex", 24, "Alex@gmail.com", "Denver U");

            expect(intern.name).toEqual("Alex");
            expect(intern.id).toEqual(24);
            expect(intern.email).toEqual("Alex@gmail.com")
            expect(intern.school).toEqual("Denver U")
        })
    })
});