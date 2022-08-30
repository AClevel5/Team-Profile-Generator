function generateHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid bg-light">
            <div class="container">
                <h1 class="display-3 text-center text-primary ">Team Profile Generator</h1>
            </div>
        </div>
    
        <div class="container">
            <div class="row">
    

`
}
module.exports = generateHTML;