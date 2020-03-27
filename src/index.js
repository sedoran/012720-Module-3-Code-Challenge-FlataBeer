const beerUrl = "http://localhost:3000/beers"

document.addEventListener("DOMContentLoaded", function() {
    // console.log("Happy Friday")
    getBeers()
    
})

const getBeers = () => {
    fetch(beerUrl)
    .then(res => res.json())
    .then(beers => renderBeers(beers))
}

const renderBeers = beers => {
    const list = document.getElementById('beer-list')
    beers.forEach(beer => {
        let renderedBeer = renderBeer(beer)
        list.appendChild(renderedBeer)
    });
    singleBeer()
}

const renderBeer = beer => {
    const li = document.createElement('li')
    li.className = "list-group-item"
    li.id = beer.id
    li.innerText = beer.name
    return li
}

const singleBeer = () => {
    const list = document.getElementById('beer-list')
    list.addEventListener("click", event => {
        let beerId = parseInt(event.target.id)
        getBeer(beerId)
    })
}

const getBeer = (beerId) =>{
    fetch(`${beerUrl}/${beerId}`)
    .then(res => res.json())
    .then(beer => {
        singleBeerDetails(beer),
        removeBeer()
    })
}

const singleBeerDetails = (beer) => {
    const div = document.getElementById('beer-detail')
    div.innerHTML = `
        <h1 id="${beer.id}">${beer.name}</h1>
        <img src="${beer.image_url}">
        <h3>${beer.tagline}</h3>
        <p>${beer.description}</p>
        <button id=“delete-beer” class=“btn btn-info”>Delete</button>
    `
    return div
}

const removeBeer = () =>{
    const button = document.querySelector("button")
    button.addEventListener("click", e => {
        const beer = e.target.parentNode.querySelector("h1").id
        const beerId = parseInt(beer)
        // console.log(beerId)
        destroyBeer(beerId)
    })
}


const destroyBeer = beerId => {
    fetch( `${beerUrl}/${beerId}`, {
        method: "DELETE"
    })
    .then(console.log)
}

