/*
    Blackjack
    by Turtleman
*/

let dealer ="Turtleman";

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten',
              'Nine', 'Eight', 'Seven', 'Six', 'Five',
              'Four', 'Three', 'Two'];

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
