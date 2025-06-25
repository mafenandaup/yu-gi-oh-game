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
        player: document.getElementById('player-field-card'),
        oponent: document.getElementById('oponent-field-card')
    },

    button: document.getElementById('next-duel') // por ter apenas um botão, não é necessário criar um estado inicial. caso contrario, criaria um estado actions
}

const playerSides = {
    player1: "player-cards",
    oponent1: "oponent-cards"
}

const cardData = [
    {
        id: 0,
        nome: "dragon",
        type: "Paper",
        img: "../assets/icons/dragon.png",
        winOf: [1],
        loseOf: [2]
    },
    {
        id: 1,
        nome: "darkmagician",
        type: "Rock",
        img: "../assets/icons/magician.png",
        winOf: [2],
        loseOf: [0],
    },
    {
        id: 2,
        nome: "exodia",
        type: "Scissors",
        img: "../assets/icons/exodia.png",
        winOf: [0],
        loseOf: [1],
    }
]


async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id; // Garantir que o índice esteja dentro do array
}

async function setCardsField(params) {

}



async function createCardImg(IdCard, fieldSide) {
    const cardImg = document.createElement("img");
    cardImg.setAttribute("height", "100px");
    cardImg.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImg.setAttribute("data-id", IdCard); // Atribui corretamente o ID ao atributo data-id
    cardImg.classList.add("card");

    console.log(`Creating card with ID: ${IdCard}`); // Debug para garantir que o ID está correto

    cardImg.addEventListener("mouseover", () => {
        const cardIndex = cardImg.getAttribute("data-id");
        drawSelectCard(cardIndex); // Passa o ID para atualizar os detalhes
    });

    // Evento de clique apenas para o jogador
    if (fieldSide === playerSides.player1) {
        cardImg.addEventListener("click", () => {
            setCardsField(cardImg.getAttribute("data-id"));
            console.log(`Card clicked with ID: ${cardImg.getAttribute("data-id")}`);
        });
    }


    return cardImg;
}




async function drawSelectCard(index) {
    const card = cardData.find((c) => c.id === parseInt(index, 10)); // Certifique-se de converter o índice para número
    if (card) {
        state.cardSprites.cardImg.src = card.img; // Atualiza a imagem
        state.cardSprites.cardName.innerText = card.nome; // Atualiza o nome
        state.cardSprites.cardType.innerText = `Attribute: ${card.type}`; // Atualiza o tipo
    } else {
        console.error(`Card not found for index: ${index}`); // Log de erro para depuração
    }
}


async function drawCards(cardNum, fieldSide) { // se tem funcões await dentro, a função precisa ser async
    for (let i = 0; i < cardNum; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImg = await createCardImg(randomIdCard, fieldSide);
        document.getElementById(fieldSide).appendChild(cardImg);
    }

}


function init() {
    drawCards(5, playerSides.player1)
    drawCards(5, playerSides.oponent1)
}

init();