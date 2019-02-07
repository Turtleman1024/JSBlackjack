/*
    Blackjack
    by Turtleman
*/

let dealer ="Turtleman";

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten',
              'Nine', 'Eight', 'Seven', 'Six', 'Five',
              'Four', 'Three', 'Two'];

let deck = [];

function createDeck()
{
    let deck = []
    //Loop through each suit
    for(let suitIndex = 0; suitIndex < suits.length; suitIndex++)
    {
        //Loop through each value
        for(let valuesIndex = 0; valuesIndex < values.length; valuesIndex++)
        {
            //Assign the value to a suit and store it in the deck array.
            deck.push(values[valuesIndex] + ' of ' + suits[suitIndex])
        }
    }
    return deck;   
}

function getNextCard()
{
    return deck.shift();
}

deck = createDeck();

for(let deckIndex = 0; deckIndex < deck.length; deckIndex++)
{
    console.log(deck[deckIndex]);
}

