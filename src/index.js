const BASE_URL = "http://localhost:3000/beers/"
const ul = document.getElementById('beer-list')
const div = document.getElementById('beer-detail')

    
    //fetch beers from Api 
    //display all beers
    //display single beer info when you click on beer

document.addEventListener('DOMContentLoaded', () => {
    getBeers()
    getBeerDetail()
})

const getBeers = () => {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(beers => {
        beers.forEach(beer => {
        let li = document.createElement('li')
        li.className="list-group-item"
        li.id=beer.id
            ul.append(li)
            li.innerText=`${beer.name}`
        })
    })
}

const getBeerDetail = () => {
    ul.addEventListener('click', event => {
        id = event.target.id
        fetch(`${BASE_URL}${id}`)
        .then(response => response.json())
        .then(beer => {
            div.innerHTML=`
            <h1>${beer.name}</h1>
            <img src="${beer.image_url}">
            <h3>${beer.tagline}</h3>
            <p>${beer.description}</p>`
        })

    })
}