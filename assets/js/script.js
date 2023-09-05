const board = document.getElementById("board"); // Get the game board element.
const signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "pisces", "scorpio", "capricorn", "aquarius", "sagitarius", "libra"];
const deck = [...signs, ...signs]; // Create a deck with pairs of zodiac signs.

// Function to build the game board.

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
}

function closeModal(exitModal) {
    let modal = document.getElementById(exitModal);

    modal.style.display = 'none';
}