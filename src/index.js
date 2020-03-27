const BASE_URL = "http://localhost:3000/beers/"
const ul = document.getElementById('beer-list')

    
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
        fetch(`BASE_URL`)

    })
}