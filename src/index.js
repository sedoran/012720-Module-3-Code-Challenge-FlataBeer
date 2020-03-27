const BASE_URL = "http://localhost:3000/beers"
const ul = document.getElementById('beer-list')

    
    //fetch beers from Api 
    //display all beers
    //display single beer info when you click on beer

document.addEventListener('DOMConetentLoaded', () => {
    getBeers()
})

const getBeers = () => {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(beers => {
        console.log(beers)
        beers.forEach(beer => {
        let li = document.createElement('li')
            ul.append(li)
            li.innerText=`${beer.name}`
            // ul.innerHTML+=`
            // <li class="list-group-item">${beer.name}</li>`
        })
    })
}