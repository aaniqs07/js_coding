

function Jordanss(typeOfshoes, releaseDate, colour){
this.typeOfshoes = typeOfshoes,
this.releaseDate = releaseDate,
this.colour = colour,
this.shoe = function (){
    console.log(`You have the ${this.colour}`)
 }

}


const shoe1 = new Jordanss('Jordan 4', '2014', 'Yellow')
const shoe2 = new Jordanss('Jordan 3', '1999', 'Blue')
const shoe3 = new Jordanss("Jordan 1", "2017", "Green")

console.log(typeof shoe1);

shoe1.shoe()

console.log(shoe1.colour)