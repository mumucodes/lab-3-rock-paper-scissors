// import functions and grab DOM elements
import { randomThrow } from './randomThrow.js'
import { compare } from './compare.js';

let playerChoosesRock = document.getElementById('rockRadioButton');
let playerChoosesPaper = document.getElementById('paperRadioButton');
let playerChoosesScissors = document.getElementById('scissorRadioButton');
let gamePlay = document.getElementById('pressToPlay');
let resultsDisplay = document.getElementById('computerVisualState');

gamePlay.addEventListener('click', () => {
    const currentChecked = document.querySelector('input:checked');
    let userChoice = currentChecked.value;
    let computerChoice = randomThrow();
    
    const result = compare(userChoice, computerChoice);
    // alert(result)
    
    if ( result === 'you lose')  {
        resultsDisplay.textContent = 'sorry not today'
    }
    else if ( result === 'you win') {
        resultsDisplay.textContent = 'winner winner chicken dinner!'
    }
    else if ( result === 'draw') {
        resultsDisplay.textContent = 'looks like we need to go again'
    }
        

console.log(resultsDisplay);
});
// i still need to display the gameresults into a field on the screen
// i still need to display a counter with the wins and losses

