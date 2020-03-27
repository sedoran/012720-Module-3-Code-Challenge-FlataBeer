
document.addEventListener("DOMContentLoaded", e => {
    // invoke functions
    getBeers();
    beerShow();

})

// fetch beer names and invoke render list function
function getBeers() {
    fetch(`http://localhost:3000/beers`)
    .then(resp => resp.json())
    .then(beers => renderBeerList(beers))
}

// render beer names
function renderBeerList(beers) {
    const list = document.getElementById("beer-list")
    beers.forEach( beer => {
        const li = document.createElement("li")
        li.className = "list-group-item" // trying to make it look like example
        li.innerText = beer.name
        li.id = beer.id
        list.appendChild(li)
    })
}

// listen for li click, fetch that beer from db
function beerShow() {
    const list = document.getElementById("beer-list")
    list.addEventListener("click", e => {
        const beer_id = e.target.id
        fetch(`http://localhost:3000/beers/${beer_id}`)
        .then(resp => resp.json())
        .then(beer => renderBeerShow(beer))
    })
}

// render that beer's showpage
function renderBeerShow(beer) {
    const beerDetail = document.getElementById("beer-detail")
    beerDetail.dataset.beer = beer.id  // may need this for future features
    beerDetail.innerHTML = `
        <h1>${beer.name}</h1>
        <img src=${beer.image_url}>
        <h3>${beer.tagline}</h3>
        <p>${beer.description}</p>
    `
}
