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

describe("getGithub", () => {
    it("Should return Github", () => {
        const engineer = new Engineer("Alex", 24, "Alex@gmail.com", "Aclevel5");
        const gitHub = engineer.getGithub();
        expect(gitHub).toEqual("Aclevel5");
    });
});

describe("getRole", () => {
    it("Should return Role", () => {
        const engineer = new Engineer("Alex", 24, "Alex@gmail.com", "Aclevel5");
        const role = engineer.getRole();
        expect(role).toEqual("Engineer");
    });
});