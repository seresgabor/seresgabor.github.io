function showNumbers(win, num, ballColor) {
    const winnerNumbers = createWinners(win, num);

    let parentDiv = document.querySelector(".container");
    let displayDiv = document.createElement("div");
    displayDiv.className = "display";
    displayDiv.setAttribute("role", "button");
    
    for (let number of winnerNumbers) {
        let span = document.createElement("span");
        span.innerHTML = number;
        span.style.backgroundColor = ballColor;
        displayDiv.appendChild(span);

    };
    
    parentDiv.insertAdjacentElement("afterbegin", displayDiv);
}

// Craeting winners array by means of includes() method.

function createWinners(win, num) {
    let winners = [];
    for (let i=0; i<win; i++) {
        let rand = Math.ceil(Math.random()*num);
        if (winners.includes(rand)) {
            i--;
        }else {
            winners[i] = rand;
        };
    };
    winners = winners.sort((a,b) => a-b);
    return winners;
}


//Creating winners array by splicing numbers array.

/* function createWinners(win, num) {
    let numbers = [];
    for (let i=0; i<num; i++) {
        numbers[i] = i+1;
    };
    let winners = [];
    for (j=0; j<win; j++) {
        winners[j] = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    };
    winners = winners.sort((a,b) => a-b);
    return winners;
} */

document.getElementById("banner5").addEventListener("click", function() {
    showNumbers(5,90,"#00a769");
});

document.getElementById("banner6").addEventListener("click", function() {
    showNumbers(6,45,"#eb0f42");
});

document.getElementById("banner7").addEventListener("click", function() {
    showNumbers(7,35,"#19407c");
});

document.getElementById("clear-screen").addEventListener("click", function() {
    let containerDiv = document.querySelector(".container");
    /* while (containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.firstChild);
    }; */
    containerDiv.innerHTML = "";
});