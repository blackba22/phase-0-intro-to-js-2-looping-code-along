// Code your solutions in this fi

function writeCards(names, event){
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages
}

writeCards(["Guadalupe", "Ollie", "Aki"], " surprise ");


function countDown(number){
    while (number >= 0){
        console.log(number);
        number--;
    }
}