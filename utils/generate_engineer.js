function generateManager(data) {
    return `
    name is : ${data.name}
    id is : ${data.id}
    email is : ${data.email}
    github is : ${data.gitHubUserName}
    `
}
module.exports = generateManager;
