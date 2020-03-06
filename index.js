// function writeCards(cards){
//     for (let i = 0; i < cards.length; i++) {
//         console.log(`Thank you, ${cards[i]} ,for the wonderful birthday gift!`)
//     }
//     return cards;
// }
// writeCards(cards);
function writeCards(cards, giftType) {
    let strings = [];
    for (let i = 0; i < cards.length; i++) {
       strings.push(`Thank you, ${cards[i]}, for the wonderful ${giftType} gift!`);
    }
    return strings;
 }

 function countDown(numbers){
     let i = 11
    while (i > 0){
        console.log(numbers);
        i--;
    }

 }