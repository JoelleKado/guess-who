console.log('Here are all the available people:', people);

console.log('JS is CONNECTED');

$(document).ready(function() {
    console.log('JQ is READY');

    for(person of people) {
        $('#namePlace').append(`<div>${person.name} <img src="https://github.com/${person.githubUsername}.png?size=250"></div> 
        `)
    }
    // $('#generateButton').on('click', appendDivFunction);
    // /*append a `<div>` element when you click the button. 
    // It should append a new div each time you click the button.*/
    // /*Clicking a "Yellow" `<button>` should change its parent `background-color` 
    // from red to yellow.*/
    // $('#generateButton').on('click', '.yellowButton', yellowFunction);

    console.log(randomNumber(0, 6));
});




function randomNumber(min, max){//this is the index
    let generatedNumber = Math.floor(Math.random() * (1 + max - min) + min);
    if(generatedNumber ===3){console.log('the number is 3');
    }
    return generatedNumber;
    
}