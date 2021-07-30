const target = document.querySelector(".items");

fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=059474f0190e4588b331b13fc15861b6&query=pasta')
    .then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
        let displayData = ""
        data.results.forEach(function(items) {
            displayData += ` <div><img src="${items.image}"/> <h2>${items.title}</h2></div>`
        })
        target.innerHTML = displayData;
    })