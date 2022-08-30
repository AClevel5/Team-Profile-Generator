const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should make a new object taking in 4 arguments (Name, Email, ID & Office#) ", () => {
            const manager = new Manager("Alex", 24, "Alex@gmail.com", 344);

            expect(manager.name).toEqual("Alex");
            expect(manager.id).toEqual(24);
            expect(manager.email).toEqual("Alex@gmail.com");
            expect(manager.officeNumber).toEqual(344);
        })
    })
});