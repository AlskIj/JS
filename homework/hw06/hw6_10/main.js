

let suits = ['spade', 'diamond','heart', 'clubs']
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
let deck = [];

for (const suit of suits) {
    for (const value of values) {
        let color;
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red'
        }else {
            color = 'black'
        }
        deck.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    }
}

deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');

deck.filter(card => card.value === '6');

deck.filter(card => card.color === 'red');

deck.filter(card => card.cardSuit === 'diamond');

console.log(deck.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')))

