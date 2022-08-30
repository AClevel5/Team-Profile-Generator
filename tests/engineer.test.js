const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should make a new object taking in 4 arguments (Name, Email, ID & GitHub) ", () => {
            const engineer = new Engineer("Alex", 24, "Alex@gmail.com", "Aclevel5");

            expect(engineer.name).toEqual("Alex");
            expect(engineer.id).toEqual(24);
            expect(engineer.email).toEqual("Alex@gmail.com")
            expect(engineer.gitHub).toEqual("Aclevel5")
        })
    })
});