document.addEventListener("DOMContentLoaded", () => {
    
    console.log("Hello")


//Display All Beer Names
fetch("http://localhost:3000/beers")
.then(response => response.json())
.then(json => {
    console.log(json)
   const name = document.getElementById('beer-list')
   name.innerText = json.name
   
})

})
