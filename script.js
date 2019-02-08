/*
    Blackjack
    by Turtleman
*/

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten',
              'Nine', 'Eight', 'Seven', 'Six', 'Five',
              'Four', 'Three', 'Two'];

//textArea will be used to display who wins.
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//First hide the hit and stay buttons
hitButton.style.display = 'none';
stayButton.style.display = 'none';

//Added an event listener for the new game button
newGameButton.addEventListener('click', function(){
    textArea.innerHTML = "Who will win!";
    //Hide the new game button
    newGameButton.style.display = 'none';
    //Display the hit and stay button on the same line
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
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

//Create a deck of cards
let deck = createDeck();

//Assign two cards to a player
let playerCards = [getNextCard(), getNextCard()];

//Display the two cards
console.log(" " + getCardString(playerCards[0]));
console.log(" "+ getCardString(playerCards[1]));
