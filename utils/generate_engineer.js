function generateEngineer(data) {
    return `
    <div class="col-12 col-lg-4 p-2 mx-auto">
    <div class="card border-primary">
        <div class="card-header bg-primary text-white">
            <h2>Engineer</h2>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${data.name}</li>
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}"
                    class="card-link">${data.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${data.gitHub}"
                    class="card-link">${data.gitHub}</a></li>
        </ul>
    </div>
    </div>
  
    `
}
module.exports = generateEngineer;
