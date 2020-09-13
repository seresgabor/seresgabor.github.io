function showNumbers(winners,ballColor) {
    //console.log("A nyerő számok emelkedő számsorrendben:", winners.toString());
    let parentDiv = document.querySelector(".container");
    let displayDiv = document.createElement("div");
    displayDiv.className = "display";
    
    for (let number of winners) {
        let span = document.createElement("span");
        span.innerHTML = number;
        span.style.backgroundColor = ballColor;
        displayDiv.appendChild(span);
    };
    
    parentDiv.insertAdjacentElement("afterbegin", displayDiv);
}

// Craeting winners array by includes() method.

function createWinners(win, num, ballColor) {
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

    showNumbers(winners, ballColor);
}

//Creating winners array by splicing numbers array.

/* function createWinners(win,num,ballColor) {
    let numbers = [];
    for (let i=0; i<num; i++) {
        numbers[i] = i+1;
    };
    let winners = [];
    for (j=0; j<win; j++) {
        winners[j] = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    };
    // console.log(winners); // 
    winners = winners.sort((a,b) => a-b);
    
    showNumbers(winners,ballColor);
} */

document.getElementById("banner5").addEventListener("click", function() {
    let ballColor = "#00a769";
    createWinners(5,90,ballColor);
});

document.getElementById("banner6").addEventListener("click", function() {
    let ballColor = "#eb0f42";
    createWinners(6,45,ballColor);
});

document.getElementById("banner7").addEventListener("click", function() {
    let ballColor = "#19407c";
    createWinners(7,35,ballColor);
});

document.getElementById("clear-screen").addEventListener("click", function() {
    let containerDiv = document.querySelector(".container");
    /* while (containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.firstChild);
    }; */
    containerDiv.innerHTML = "";
});