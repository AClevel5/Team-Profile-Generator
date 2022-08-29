function generateIntern(data) {
    return `
    name is : ${data.name}
    id is : ${data.id}
    email is : ${data.email}
    School is : ${data.school}
    `
}
module.exports = generateIntern;