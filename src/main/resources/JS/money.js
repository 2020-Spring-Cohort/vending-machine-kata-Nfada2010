const div1 = document.querySelector(".div1")
const div4 = document.querySelector(".div4")
const dollarButton = document.querySelector(".dollar_button")
const quarterButton = document.querySelector(".quarter_button")
const dimeButton = document.querySelector(".dime_button")
const nickelButton = document.querySelector(".nickel_button")
const pennyButton = document.querySelector(".penny_button")
const creditCardButton = document.querySelector("credit_card_button")


const selectMoney = () => {
if(div1.firstChild){
    div1.innerHTML = ""
}

const selectedMoney = document.createElement("div")
const moneyAnchor = document.createElement("div")
moneyAnchor.classList.add("money_anchor")
moneyAnchor.classList.add("selected_money")
div1.appendChild(moneyAnchor)
moneyAnchor.appendChild(selectedMoney)

selectedMoney.innerHTML = "SELECTED MONEY"
    
}

dollarButton.addEventListener("click", selectMoney)
quarterButton.addEventListener("click", selectMoney)
dimeButton.addEventListener("click", selectMoney)
nickelButton.addEventListener("click", selectMoney)
pennyButton.addEventListener("click", selectMoney)