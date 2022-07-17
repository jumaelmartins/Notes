const cards = document.querySelectorAll('.card');
let hasFliperCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipcard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFliperCard) {
        hasFliperCard = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    hasFliperCard = false;
    checkForMatch();
}
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventlistenner ('click', flipcard);
    secondCard.removeEventlistenner ('click', flipcard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout (() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFliperCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 20);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipcard);
})
