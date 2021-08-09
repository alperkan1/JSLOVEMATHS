document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});
/**
 * the main game loop to crate random numbers
 * and resets 
 */
function runGame(gameType) {
    //creates a number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1,num2)
    } else alert (`Unknown game type: ${gameType}`)
    throw `Unknow game type: ${gameType}. Aborting!`;

}



function checkAnswer() {


}

/**
 * get the operants and checks if the answer is correct 
 * it checks the game add minus time or divide
 */
function calculateCorrectAnswer() {
    let operant1 = parseInt(document.getElementById("operand1").innerText );
    let operant2 = parseInt(document.getElementById("operand2").innerText );
    let operator = document.getElementById("operator").innerText ;

if (operator === "+"){
return[operant1 + operant2, "addition"];
} else {
    alert (`Unimplemted operator ${operator}`)
    throw  `Unimplemted operator ${operator}.aborting`
}

}

function incrementScore() {


}

function incrementWrongAnswer() {


}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {


}

function displayMultiplyQuestion() {


}