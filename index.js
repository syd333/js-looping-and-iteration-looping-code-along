// Code your solutions in this file
function writeCards(names, event) {
    let thankYou = []
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYou
}

function countDown(num) {
    while (num >= 0){
        console.log(num)
        num--
    }

}