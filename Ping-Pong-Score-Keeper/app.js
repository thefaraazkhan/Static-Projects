const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const winningScoreSelect = document.querySelector('#playto') 


let p1Score = 0;
let p2Score = 0;

let winningScore = 3;

p1Button.addEventListener( 'click' , function () {
    if(winningScore != p1Score && p2Score != winningScore){
        p1Score = p1Score + 1;
        p1Display.textContent = p1Score;

        if(p1Score === winningScore) {
            
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

// has-text-success has-text-danger

p2Button.addEventListener( 'click' , function () {
    if(winningScore != p2Score && p1Score != winningScore){
        p2Score = p2Score + 1;
        p2Display.textContent = p2Score;
        
        if(p2Score === winningScore) {
            p1Display.classList.add('has-text-danger')
            p2Display.classList.add('has-text-success')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled = false;
    p2Button.disabled = false;
}

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change' , function() {
    winningScore = parseInt(this.value);
    reset();
})