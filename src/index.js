const beerUrl = "http://localhost:3000/beers"

document.addEventListener("DOMContentLoaded", function() {
    // console.log("Happy Friday")
    getBeers()
    // getBeer()
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
    console.log(beer)
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
    .then(beer => singleBeerDetails(beer))
}

const singleBeerDetails = (beer) => {
    const div = document.getElementById('beer-detail')
    div.innerHTML = `
        <h1>${beer.name}</h1>
        <img src="${beer.image_url}">
        <h3>${beer.tagline}</h3>
        <p>${beer.description}</p>
    `
    console.log("inside beerDetail",div)
    return div
}

