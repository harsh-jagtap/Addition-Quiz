console.log("Wel-Come to Addition Quiz Web App");

let startButton = document.querySelector("#startButton");
let points = 0;

startButton.addEventListener("click", sumGenerator);

function sumGenerator() {
    // starting game
    // points 


    // resource
    let diplay = document.querySelector("#display");
    let num1 = Math.round(1000 + (10000 - 1000) * Math.random());
    let num2 = Math.round(1000 + (10000 - 1000) * Math.random());
    let answer = num1 + num2;

    // displaying
    let sumDisplay = `Points : <span>${points}</span>
    <div class="sumBox">
    <div>${num1}+${num2}</div>
    <form class="dis-col">
    <input type="number" id="answerInput" class="input" placeholder="Enter answer of sum" autofocus>
    <button id="submitButton" class="input">Next</button>
    </form>
    <hr>
    <div id="display" class="font-Small tip">
        - Tip
        <ul>
            <li> Solve in paper and give answer </li>
            <li> Try your self </li>
        </ul>
    </div>
    
    </div>`

    diplay.innerHTML = sumDisplay;

    console.log(num1, num2, answer);

    // checking answer
    let submitButton = document.querySelector("#submitButton");
    let answerInput = document.querySelector("#answerInput");
    let highestscore = localStorage.getItem("highscore")

    submitButton.addEventListener("click", function checkingAnswer(e) {
        e.preventDefault()

        if (answerInput.value == answer) {
            sumGenerator();
            points += 1;
        } else {
            console.log("wrong answer");
            answerInput.setAttribute("class", "wrong input")
        }
    })
}