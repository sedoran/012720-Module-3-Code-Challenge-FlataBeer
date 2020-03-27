document.addEventListener("DOMContentLoaded", function(){})

console.log("Hello")


//Display All Beer Names
fetch("http://localhost:3000/beers")
.then(result => result.json())
.then(json => {
    console.log("Image")
    BeerList(json)
})

function BeerList(beers){
    for(let i =0; i <beers.length; i++){
        addBeerToList(beers[i])
    }
}

function addBeerToList(book){
    let li = document.createElement("li")
    li.textContent = beer.title;
    li.addEventListener("click", (e) => {
        displayBeer(beer)
    })
    list.appendChil(li)
}