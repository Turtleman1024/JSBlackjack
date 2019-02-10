/*
    Blackjack
    by Turtleman
*/

// Card Variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten',
              'Nine', 'Eight', 'Seven', 'Six', 'Five',
              'Four', 'Three', 'Two'];

// DOM Variables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

// Game variables
let gameStarted  = false,
    gameOver     = false,
    playerWon    = false,
    dealerCards  = [],
    playersCards = [],
    dealerScore  = 0,
    playerScore  = [],
    deck         = [];

//Hide the hit and stay buttons to start out with.
hitButton.style.display = 'none';
stayButton.style.display = 'none';

//Added an event listener for the new game button
newGameButton.addEventListener('click', function(){
    if(gameOver)
    {
        deck = [],
        gameOver = false,
        gameStarted = false,
        dealerCards = [],
        playersCards = [],
        textArea.innerText = "";
    }
    gameStarted = true;
    gameOver = false;
    playerWond = false;
    dealerScore = 0;
    playerScore = 0;

    //Create a deck of cards
    deck = createDeck();
    //Shuffle the deck
    shuffleDeck(deck);
    //Dealer and player cards
    playersCards.push(getNextCard());
    dealerCards.push(getNextCard());
    playersCards.push(getNextCard());
    dealerCards.push(getNextCard());

    //Hide the new game button
    newGameButton.style.display = 'none';
    //Display the hit and stay button on the same line
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';

    showStatus();
});

//A event listener for the hit button
hitButton.addEventListener('click', function()
{
    playersCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

//A event listener for the stay button
stayButton.addEventListener('click', function()
{
    gameOver= true;
    checkForEndOfGame();
    showStatus();
});

//A method that will create a deck of cards
function createDeck()
{
    let deck = []
    //Loop through each suit
    for(let suitIndex = 0; suitIndex < suits.length; suitIndex++)
    {
        //Loop through each value
        for(let valuesIndex = 0; valuesIndex < values.length; valuesIndex++)
        {
            //Create a card object and store the suit and value in the card
            let card = {
                suit: suits[suitIndex],
                value: values[valuesIndex]
            };
            //Added the card to the deck array (Array of objects)
            deck.push(card);
        }
    }
    return deck;   
}

//A method that will shuffle the card deck
function shuffleDeck(deck)
{
    //Loop through the deck
    for (let index = 0; index < deck.length; index++)
    {
        //Get a random card index
        //Math.random wil' return a decimal number so need to truncate it
        let swapIndex = Math.trunc(Math.random() * deck.length);
        //Get the card at the random index
        let temp = deck[swapIndex];
        //Swap the cards
        deck[swapIndex] = deck[index];
        deck[index] = temp;
    }
}

//A method that will return the card string
function getCardString(card)
{
    return card.value + ' of ' + card.suit;
}

//A method that will return the next card on the deck
function getNextCard()
{
    return deck.shift();
}

//Update the scores of the game
function updateScores()
{
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playersCards);
}

//A method that will check if the game is over
function checkForEndOfGame()
{
    updateScores();

    if(gameOver)
    {
        //Let dealer take cards
        while(dealerScore < playerScore && playerScore <= 21 && dealerScore <= 21)
        {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }

    if(playerScore >21) 
    {
        playerWon = false;
        gameOver = true;
    }
    else if(dealerScore > 21)
    {
        playerWon = true;
        gameOver = true;
    }
    else if(gameOver)
    {
        if(playerScore > dealerScore)
        {
            playerWon = true;
        }
        else if(playerScore === dealerScore)
        {
            playerWon = false;
        }
        else{
            playerWon = false;
        }
    }
}

//A method that will show the status of the game.
function showStatus()
{
    if(!gameStarted)
    {
        textArea.innerHTML = "Who will win!";
        return;
    }

    //Deal cards to player
    let playersCardString = '';
    for(let index = 0; index < playersCards.length; index++)
    {
        playersCardString += getCardString(playersCards[index]) + '\n';
    }

    //Deal cards to dealer
    let dealerCardString = '';
    for(let index = 0; index < dealerCards.length; index++)
    {
        dealerCardString += getCardString(dealerCards[index]) + '\n';
    }

    updateScores();

    textArea.innerText = 
        'Turtleman has:\n' +
        dealerCardString +
        '(score: ' + dealerScore + ')\n\n' +

        'Player has:\n' +
        playersCardString + 
        '(score: ' + playerScore + ')\n\n';

    if(gameOver)
    {
        if(playerWon)
        {
            textArea.innerText += "\nYOU WIN!";
        }
        else
        {
            textArea.innerText += "\nTURTLEMAN WINS!";
        }
        //Unhide the new game button
        newGameButton.style.display = 'inline';
        //Hide the hit and stay button on the same line
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
}

//Get the cards value
function getCardNumericValue(card)
{
    switch(card.value)
    {
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}

//A method to calculate passed in players score
function getScore(cardArray)
{
    let score = 0;
    let hasAce = false;

    for(let index = 0; index < cardArray.length; index++)
    {
        let card = cardArray[index];
        score += getCardNumericValue(card);
        if(card.value === 'Ace')
        {
            hasAce = true;
        }
    }
    if(hasAce && score + 10 <= 21)
    {
        return score + 10;
    }
    return score;
}





