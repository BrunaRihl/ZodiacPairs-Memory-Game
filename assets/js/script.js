const board = document.getElementById("board"); // Get the game board element.
const signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "pisces", "scorpio", "capricorn", "aquarius", "sagitarius", "libra"];
const deck = [...signs, ...signs]; // Create a deck with pairs of zodiac signs.

let flipped = false;
let lockBoard = false;
let cardOne, cardTwo;


/* Function to build the game board */

function buildBoard(list){
    for (const index in list) {
        board.insertAdjacentHTML(
        "beforeend", 
        `<div class="card-back" data-name=${list[index]}></div>`
        )
    };

    let cards = document.querySelectorAll('.card-back');
    cards.forEach(card => card.addEventListener('click', flipCard));
}


/* Function called when a card is clicked to flip card*/

function flipCard(event){
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

}

/* Function to initialize the game */

function initGame() {
    board.innerHTML = '';
    buildBoard(deck);
 }

 initGame();

/* Function to open the modal window */

function openModal(loadModal) {
    let modal = document.getElementById(loadModal);

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/* Function to close the modal window */

function closeModal(exitModal) {
    let modal = document.getElementById(exitModal);

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}