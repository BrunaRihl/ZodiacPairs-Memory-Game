const board = document.getElementById("board"); // Get the game board element.
const signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "pisces", "scorpio", "capricorn", "aquarius", "sagitarius", "libra"];
const deck = [...signs, ...signs]; // Create a deck with pairs of zodiac signs.

let flipped = false;
let lockBoard = false;
let cardOne, cardTwo;
let pairsMatch = 0;
let timerGame;
let seconds = 0;
let timeRunning = false;
let finalTime = undefined;
let pairsUnmatch = 0;
let finalScore = 0;

/* Function to build the game board */

function buildBoard(list) {
    for (const index in list) {
        board.insertAdjacentHTML(
            "beforeend",
            `<div class="card-back" data-name=${list[index]}></div>`
        )
    };

    let cards = document.querySelectorAll('.card-back');
    cards.forEach(card => card.addEventListener('click', flipCard));
}


/* Function called when a card is clicked to flip card */

function flipCard(event) {
    if (lockBoard) return;
    if (this === cardOne) return;

    this.classList.add(event.target.dataset.name);

    if (!flipped) {
        flipped = true;
        cardOne = this;
        return;
    }

    cardTwo = this;
    flipped = false;

    checkForMatch();
}

/* Function to check if two flipped cards match */

function checkForMatch() {
    let isMatch = cardOne.dataset.name === cardTwo.dataset.name;

    if (isMatch) {
        match();
        pairsMatch++
        if (pairsMatch === signs.length) {
            finalTime = seconds;
            stopChronometer();
            openModal("win")
        };
    } else {
        unmatch();
    };
}


/* Function called when cards match */

function match() {
    cardOne.removeEventListener('click', flipCard);
    cardOne.innerHTML = `<h2>${cardOne.dataset.name}</h2>`
    cardTwo.removeEventListener('click', flipCard);
    cardTwo.innerHTML = `<h2>${cardTwo.dataset.name}</h2>`

    resetBoard()
}

/* Function called when cards don't match. */

function unmatch() {
    pairsUnmatch++;
    lockBoard = true;

    setTimeout(() => {
        cardOne.classList.remove(cardOne.dataset.name);
        cardTwo.classList.remove(cardTwo.dataset.name);
        resetBoard()
    }, 1500);
}


/*Function to prepare the board for the next turn */

function resetBoard() {
    flipped = false;
    lockBoard = false;
    cardOne = null;
    cardTwo = null;
}


/* Function to initialize the game */

function initGame() {
    board.innerHTML = '';
    list = randomCards(deck);
    buildBoard(list);

}

/* Shuffles the deck of cards randomly */

function randomCards(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function restartGame() {
    resetChronometer();
    pairsMatch = 0;
    pairsUnmatch = 0;
    initGame()
    activateChronometer()

}

/* Function to start the timer */

function activateChronometer() {
    if (!timeRunning) {
        timerGame = setInterval(() => {
            seconds++;
            document.getElementById("time").innerText = seconds;
            document.getElementById("match").innerText = pairsMatch;
            document.getElementById("unmatch").innerText = pairsUnmatch;
            finalScore = (pairsMatch * 50) - (pairsUnmatch * 5);
            document.getElementById("score").innerText = finalScore;
        }, 1000);
        timeRunning = true;
    }
}

/* Function to stop the timer */

function stopChronometer() {
    clearInterval(timerGame);
    timeRunning = false;
}

/* Function to stop the timer */

function resetChronometer() {
    clearInterval(timerGame);
    seconds = 0;
    document.getElementById('time').textContent = '0';
    timeRunning = false;
}


/* Function to open the modal window */

function openModal(loadModal) {
    let modal = document.getElementById(loadModal);
    finalScore = finalScore - seconds
    totalOpen = pairsMatch + pairsUnmatch;
    if (finalScore < 0){
        document.getElementById("final").innerText = 'You Lost :(';
    } else {
        document.getElementById("final").innerText = 'You Won!!!';
    };
    document.getElementById("final-score").innerText = (finalScore);
    document.getElementById("final-open").innerText = totalOpen;
    document.getElementById("final-time").innerText = seconds;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/* Function to close the modal window */

function closeModal(exitModal) {
    let modal = document.getElementById(exitModal);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}