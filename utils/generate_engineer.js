function generateManager(data) {
    return `
    name is : ${data.name}
    id is : ${data.id}
    email is : ${data.name}
    github is : ${data.gitHub}
    `
}
module.exports = generateManager;
