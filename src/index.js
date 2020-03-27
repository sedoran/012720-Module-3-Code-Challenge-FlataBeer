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
        li.innerHTML = `<li class="list-group-item">${beer.name}</li>`
        ul.appendChild(li)
    }
    



})
    