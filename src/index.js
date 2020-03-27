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
        event.preventDefault()
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


// let h1 = document.createElement('h1')
//         h1.innerHTML = beerDetail.name
//         div.appendChild(h1)

//         let img = document.createElement('img')
//         img.src = beerDetail.image_url
//         div.appendChild(img)

//         let h3 = document.createElement('h3')
//         h3.innerHTML = beerDetail.tagline
//         div.appendChild(h3)


//         let p = document.createElement('p')
//         p.innerHTML = beerDetail.description
//         div.appendChild(p)
