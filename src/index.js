document.addEventListener('DOMContentLoaded', () => {
    http://localhost:3000/beers

    fetchAllBeers()

    function fetchAllBeers(){
        fetch(`http://localhost:3000/beers`)
        .then(res => res.json())
        // .then(console.log)
        .then(beers => {
            beers.forEach(beer => {
                addBeersToBrowser(beer)
            })
        })
    }

    function addBeersToBrowser(beer){
        let ul = document.getElementById("beer-list")
        let li = document.createElement('li')
        li.dataset.id = beer.id
        li.innerHTML = `<li class="list-group-item">${beer.name}</li>`
        ul.appendChild(li)
    }

    // add listener for each beer and fetch the detail about specific beer

    document.addEventListener('click', function(event){
        let specificBeerId = event.target.parentNode.dataset.id 
        console.log(specificBeerId)

        // fetch detail about specific beer 
        fetchBeerDetail(specificBeerId)
    })

    function fetchBeerDetail(specificBeerId){
        fetch(`http://localhost:3000/beers/${specificBeerId}`)
        .then(res => res.json())
        // .then(console.log)
        .then(beerDetail =>{
            addBeerDetailToBrowser(beerDetail)
        })
    }

    function addBeerDetailToBrowser(beerDetail){
        let div = document.getElementById("beer-detail")
        div.dataset.id = beerDetail.id
        div.innerHTML = `<h1>${beerDetail.name}</h1>
                         <img src=${beerDetail.image_url}>
                         <h3>${beerDetail.tagline}</h3>
                         <p>${beerDetail.description}</p>`
    }
    



})
    