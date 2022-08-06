let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let timerEl = document.getElementById("timer")

let homeScore = 0
let guestScore = 0
let remainingMinutes = 19 
let remainingSeconds = 60
let pauseFlag = false
let myTime

// comment added 05-08-2022


function updateHomeScore() {
    homeScoreEl.textContent = homeScore
    determineLead()
   }

function updateGuestScore() {
    guestScoreEl.textContent = guestScore
    determineLead()
    }

function addOneHome() {
    homeScore += 1
    updateHomeScore()
}

function addTwoHome() {
    homeScore += 2
    updateHomeScore()
}

function addThreeHome() {
    homeScore += 3
    updateHomeScore()
}

function addOneGuest() {
   guestScore += 1
    updateGuestScore()
}

function addTwoGuest() {
    guestScore += 2
    updateGuestScore()
}

function addThreeGuest() {
    guestScore += 3
    updateGuestScore()
}

function determineLead() {
    homeScoreEl.classList.remove("leadMode")
    guestScoreEl.classList.remove("leadMode")
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("leadMode")
    } else if (homeScore < guestScore) {
        guestScoreEl.classList.add("leadMode")
    }
  }
function correctHome() {
    if (homeScore === 0) {homeScore = 0}
    else {homeScore-= 1}
    homeScoreEl.textContent = homeScore
    determineLead()
}

function correctGuest() {
    if (guestScore === 0) {guestScore = 0}
    else {guestScore -= 1}
    guestScoreEl.textContent = guestScore
    determineLead()
}

function start() {
  
         myTime = setInterval(myFunction, 1000)
    
        function myFunction() {
            let min, sec
            remainingSeconds -= 1
            if (remainingSeconds < 0) {
                    remainingMinutes -= 1
                    remainingSeconds = 59                   
                } 
            if (remainingMinutes < 10) 
                {min = "0" + remainingMinutes}  
                else
                {min = remainingMinutes} 
            if (remainingSeconds < 10) 
                {sec = "0" + remainingSeconds}
             else 
                {sec = remainingSeconds}
                if (remainingMinutes <=0 && remainingSeconds <= 0) {pause()}
                
             timerEl.textContent = min + ":" + sec
                }
              }
            
         
    


 function pause() {
    clearInterval(myTime)
}



function newGame() {
    homeScore = 0;
    updateHomeScore()
    guestScore = 0;
    updateGuestScore()
    remaingMinutes = 19
    remainingSeconds = 60
    timerEl.textContent = "20:00"
}

