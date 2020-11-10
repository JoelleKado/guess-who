console.log('Here are all the available people:', people);

console.log('JS is CONNECTED');

$(document).ready(function () {
    console.log('JQ is READY');

     for (person of people) {//Get everyone on the DOM
        $('#namePlace').append(`<div>${person.name} <img src="https://github.com/${person.githubUsername}.png?size=250"></div> 
        `);
    };
    // $('#generateButton').on('click', appendDivFunction);
    // /*append a `<div>` element when you click the button. 
    // It should append a new div each time you click the button.*/
    // /*Clicking a "Yellow" `<button>` should change its parent `background-color` 
    // from red to yellow.*/
    // $('#generateButton').on('click', '.yellowButton', yellowFunction);
    nameGenerator(0, 2);
    console.log('The answer is:', answer);
    phaseTwo();

});//EXIT readyNow

let answer;

function nameGenerator(min, max) {//ENTER randomNumberGenerator
    let generatedNumber = Math.floor(Math.random() * (1 + max - min) + min);
    // if(generatedNumber ===3){
    //   console.log('the number is 3');
    //console.log(generatedNumber);
    //console.log(generatedNumber);
    if (generatedNumber === 0) {
        answer = 'Dev';
        console.log(answer);
    }
    if (generatedNumber === 1) {
        answer = 'Dane';
        console.log(answer);

    }
    if (generatedNumber === 2) {
        answer = 'Mary';
        console.log(answer);
    }
    return generatedNumber;
};//EXIT randomNumberGenerator

function phaseTwo() {//ENTER phaseTwo
    console.log('Round One!');
    // if (answer = 'Dev') {
    //append name to instructions place
    $('#instructionsPlace').append(`<h1>Click on: ${answer}</h1>`);
    // }

};//EXIT phaseTwo