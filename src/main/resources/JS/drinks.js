
const hotCoffeeButton = document.querySelector(".hot_coffee_button")
const coldBrewButton = document.querySelector(".cold_brew_button")
const frappuccinoButton = document.querySelector(".frappuccino_button")
const mochaButton = document.querySelector(".mocha_button")
const greenTeaButton = document.querySelector(".green_tea_button")


const order = () => {
if(div4.firstChild){
    div4.innerHTML = ""
}

const orderedDrinks = document.createElement("div")
const orderAnchor = document.createElement("div")
orderAnchor.classList.add("order_anchor")
orderAnchor.classList.add("ordered_drinks")
div4.appendChild(orderAnchor)
orderAnchor.appendChild(orderedDrinks)

orderedDrinks.innerHTML = "Ordered drinks"
    
}

hotCoffeeButton.addEventListener("click", order)
coldBrewButton.addEventListener("click", order)
frappuccinoButton.addEventListener("click", order)
mochaButton.addEventListener("click", order)
greenTeaButton.addEventListener("click", order)