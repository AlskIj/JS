let suits = ['spade', 'diamond', 'heart', 'club']
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
let deck = [];

for (const suit of suits) {
    for (const value of values) {
        let color;
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red'
        } else {
            color = 'black'
        }
        deck.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    }
}

const reduce = deck.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'spade':
            accum.spades.push(card);
            break;
    }
    return accum;
}, {
    diamonds: [],
    hearts: [],
    clubs: [],
    spades: [],
});

console.log(reduce);