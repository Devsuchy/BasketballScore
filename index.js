let homePoint = document.getElementById("score-home")
let guestPoint = document.getElementById("score-guest")
let count = 0


function onePointGuest() {
    count = count + 1
    guestPoint.textContent = count
    
} 

function twoPointGuest() {
    count = count + 2
    guestPoint.textContent = count
    
} 

function threePointGuest() {
    count = count + 3
    guestPoint.textContent = count
    
} 

function onePointHome() {
    count = count + 1
    homePoint.textContent = count
    
} 

function twoPointHome() {
    count = count + 2
    homePoint.textContent = count
    
} 

function threePointHome() {
    count = count + 3
    homePoint.textContent = count    
    
} 

function newMetch(){
    count = 0
    guestPoint.textContent = count
    homePoint.textContent = count 
    
}


// function saveResult(){
      
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }
     
// }