/*jshint esversion: 6 */

const board = document.getElementById("board"); // Get the game board element.
const signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "pisces", "scorpio", "capricorn", "aquarius", "sagitarius", "libra"];
const deck = [...signs, ...signs]; // Create a deck with pairs of zodiac signs.

let flipped = false;
let lockBoard = false;
let cardOne, cardTwo;
let pairsMatch = 0;
let list;
let timerGame;
let seconds = 0;
let timeRunning = false;
let pairsUnmatch = 0;
let finalScore = 0;
let totalOpen = 0;

const closeWindWin = document.getElementById('close-modal-win');
const closeWindConst = document.getElementById('close-modal-const');
const closeWindRules = document.getElementById('close-modal-rules');
const openWindRules = document.getElementById('open-modal-rules');
const openWindConst = document.getElementById('open-modal-const');
const playGame = document.getElementById('play-game');
const replayGame = document.getElementById('replay-game');

closeWindWin.addEventListener('click', function () { closeModal('win'); });
closeWindConst.addEventListener('click', function () { closeModal('vis-modal-const'); });
closeWindRules.addEventListener('click', function () { closeModal('vis-modal-rules'); });
openWindConst.addEventListener('click', function () { openModal('vis-modal-const'); });
openWindRules.addEventListener('click', function () { openModal('vis-modal-rules'); });
playGame.addEventListener('click', function () { restartGame(); });
replayGame.addEventListener('click', function () { restartGame(); });

/**
 * Function to build the game board by populating it with 
 * cards based on the provided list of data.
 */
function buildBoard(list) {
    for (var index = 0; index < list.length; index++) {
        board.insertAdjacentHTML(
            "beforeend",
            `<div class="card-back" data-name=${list[index]}></div>`
        );
    }

    let cards = document.querySelectorAll('.card-back');
    cards.forEach(card => card.addEventListener('click', flipCard));
}


/**
 * Function called when a card is clicked to flip card, 
 * manages the behavior of flipping cards during the memory game
 */
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


/**
 * This function checks if two flipped cards match, 
 * updates game statistics, 
 * and ends the game if all pairs are matched.
 */
function checkForMatch() {
    let isMatch = cardOne.dataset.name === cardTwo.dataset.name;

    if (isMatch) {
        match();
        pairsMatch++;
        if (pairsMatch === signs.length) {
            stopChronometer();
            openModal("win");
        }
    } else {
        unmatch();
    }
    document.getElementById("match").innerText = pairsMatch;
    document.getElementById("unmatch").innerText = pairsUnmatch;
    finalScore = (pairsMatch * 50) - (pairsUnmatch * 10);
    document.getElementById("score").innerText = finalScore;
}


/**
 * Function called when cards match,
 * handles the behavior when two cards form a match.
 * It removes the click event listener from both matched cards, 
 * displays their data names, and resets the board for the next turn.
 */
function match() {
    cardOne.removeEventListener('click', flipCard);
    cardOne.innerHTML = `<h2>${cardOne.dataset.name}</h2>`;
    cardTwo.removeEventListener('click', flipCard);
    cardTwo.innerHTML = `<h2>${cardTwo.dataset.name}</h2>`;

    resetBoard();
}


/** 
 * Function called when cards don't match,
 * It keeps track of the unmatched pairs, 
 * temporarily prevents further interactions with the board, 
 * and after a short delay, flips the cards back to their original state
 * before resetting the board for the next turn.
 */
function unmatch() {
    pairsUnmatch++;
    lockBoard = true;

    setTimeout(() => {
        cardOne.classList.remove(cardOne.dataset.name);
        cardTwo.classList.remove(cardTwo.dataset.name);
        resetBoard();
    }, 1500);
}


/** 
 * Function to prepare the board for the next turn,
 * resets the game board state by clearing flipped status, 
 * unlocking the board, and resetting card references.
*/
function resetBoard() {
    flipped = false;
    lockBoard = false;
    cardOne = null;
    cardTwo = null;
}


/** 
 * Function to initialize the game,
 * initializes a new game by clearing the board,
 * generating a random list of cards from the deck, and 
 * building the game board.
*/
function initGame() {
    board.innerHTML = '';
    list = randomCards(deck);
    buildBoard(list);
}


/**
 * Shuffles the deck of cards randomly 
 * using the Fisher-Yates algorithm and 
 * returns the shuffled deck.
 */
function randomCards(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}


/** 
 * Function to restart game,
 * resetting statistics, score, and chronometer.
 * Initializes a new game and starts the chronometer.
 */
function restartGame() {
    document.getElementById("match").innerText = "0";
    document.getElementById("unmatch").innerText = "0";
    document.getElementById("score").innerText = "0";
    finalScore = 0;
    pairsUnmatch = 0;
    pairsMatch = 0;
    resetChronometer();
    initGame();
    activateChronometer();
}


/**  
 * Function to start the timer
 * starts the game timer if it is not already running.
 */
function activateChronometer() {
    if (!timeRunning) {
        timerGame = setInterval(() => {
            seconds++;
            document.getElementById("time").innerText = seconds;
        }, 1000);
        timeRunning = true;
    }
}

/**
 *  Function to stop the timer 
 */
function stopChronometer() {
    clearInterval(timerGame);
    timeRunning = false;
}

/** 
 * Function to reset the timer
 * resets the game timer to zero.
 */
function resetChronometer() {
    clearInterval(timerGame);
    seconds = 0;
    document.getElementById('time').textContent = '0';
    timeRunning = false;
}


/** 
 * Function to open the modal windows,
 * opens a modal window displaying the final game statistics.
 * calculates and displays the total number of opened pairs,
 * elapsed time, and final score.
 * Determines if the player won or lost the game based on the score.
 */
function openModal(loadModal) {
    let modal = document.getElementById(loadModal);
    finalScore = (pairsMatch * 50) - (pairsUnmatch * 10);
    finalScore = finalScore - seconds;
    totalOpen = pairsMatch + pairsUnmatch;
    document.getElementById("final-open").innerText = totalOpen;
    document.getElementById("final-time").innerText = seconds;
    document.getElementById("final-score").innerText = finalScore;
    if (finalScore < 0) {
        document.getElementById("final").innerText = 'You Lose :(';
    } else {
        document.getElementById("final").innerText = 'You Win!!!';
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}


/**
 * Function to close the modal windows.
 * It uses the modal's ID for identification.
 */
function closeModal(exitModal) {
    let modal = document.getElementById(exitModal);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

