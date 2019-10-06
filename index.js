function writeCards(names, occasion){
    let thanks = []
    for(let i = 0; i < names.length; i ++){
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return thanks
}

function countdown(num){
    while(num>-1){
        console.log(num);
        num--
    }
}