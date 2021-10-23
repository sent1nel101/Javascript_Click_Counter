let count = 0
let total = 0
let countEl = document.getElementById("countEl")
let tTotal = document.getElementById("trainTotal")
let dTotal = document.getElementById("dailyTotal")

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    dTotal.textContent = "Daily Total: "
    totalStr = count + " - "    
    total += count
    tTotal.textContent += " " + totalStr
    dTotal.textContent += total 
    countEl.textContent = 0
    count = 0
}
