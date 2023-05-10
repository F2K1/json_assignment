function getCategories() {
    html = ""

    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => {

        for (let i=0; i<data.length; i++) {
            html += "<p>" + data[i] + "</p>"
        }
        document.getElementById("block").innerHTML = html
    });
}

function getProducts() {
    html = "<ul> </ul>"

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {

        for (let i=0; i<data['products'].length; i++) {
            html += "<li>" + data['products'][i]["title"] + "<ul><li>" + data['products'][i]["description"] + "<br>" + data['products'][i]["price"] + "</li></ul>" + "</li>"
        }
        document.getElementById("block").innerHTML = html
    });
}

function getPosts() {
    html = "<ul> </ul>"

    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {

        for (let i=0; i<data['posts'].length; i++) {
            html += "<li> <strong>" + data['posts'][i]["title"] + "</strong><ul><li>" + data['posts'][i]["body"] + "<br>" + "</li></ul>" + "</li>"
        }
        document.getElementById("block").innerHTML = html
    });
}

function getTodos() {
    html = "<ul> </ul>"

    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(data => {
        for (let i=0; i<data['todos'].length; i++) {
            html += "<li>" + data['todos'][i]["todo"] + "<ul><li>" + data['todos'][i]["completed"] + "</li></ul></li>"
        }
        document.getElementById("block").innerHTML = html
    });
}

function getQuote() {
    html = "<ul> </ul>"

    fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
        html += "<p>" + data['quote'] + " -" + data['author'] + "</p>"
        document.getElementById("block").innerHTML = html
    });
}
