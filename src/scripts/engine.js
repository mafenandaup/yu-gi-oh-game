const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score-points')
    },

    cardSprites: {
        cardImg: document.getElementById('card-img'),
        cardName: document.getElementById('card-name'), // salvando os estados iniciais dos elementos via objetos
                  cardType: document.getElementById('card-type')
    },

    fieldCards: {
        player:document.getElementById('player-field-card'),
        oponent: document.getElementById('oponent-field-card')
    },

    button:document.getElementById('next-duel') // por ter apenas um botão, não é necessário criar um estado inicial. caso contrario, criaria um estado actions
}

function init() {
    state.cardSprites
}

init();