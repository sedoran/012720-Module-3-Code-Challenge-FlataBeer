const beerUrl = "http://localhost:3000/beers"

document.addEventListener("DOMContentLoaded", function() {
    console.log("Happy Friday")
    getBeers()
    singleBeer()
})

const getBeers = () => {
    fetch(beerUrl)
    .then(res => res.json())
    .then(beers => renderBeers(beers))
}

const renderBeers = beers => {
    const beerDetail = document.getElementById('beer-detail')
    const ul = document.createElement('ul')
    ul.className = "list-group"
    ul.id = "beer-list"
    beers.forEach(beer => {
        let rendered = renderBeer(beer)
        ul.appendChild(rendered)
    });
    beerDetail.appendChild(ul)
}

const renderBeer = beer => {
    const li = document.createElement('li')
    li.className = "list-group-item"
    li.innerText = beer.name
    return li
}

const singleBeer = () => {
    fetch()
    // const list = document.getElementById('beer-list')
    // console.log(list)
    // list.addEventListener("click", event => {
    //     console.log("inside the listener")
    // })
}

const getBeer = (beerId) =>{
    fetch
}