// import functions and grab DOM elements
import { randomThrow } from './randomThrow.js'
import { compare } from './compare.js';

let playerChoosesRock = document.getElementById('rockRadioButton');
let playerChoosesPaper = document.getElementById('paperRadioButton');
let playerChoosesScissors = document.getElementById('scissorRadioButton');
let gamePlay = document.getElementById('pressToPlay');
let resultsDisplay = document.getElementById('computerVisualState');
let draws = document.getElementById('draws');
let wins = document.getElementById('wins');
let losses = document.getElementById('losses')
console.log(losses);
let gameWin = 0;
let gameLoss = 0;
let gameTie = 0;

gamePlay.addEventListener('click', () => {
    const currentChecked = document.querySelector('input:checked');
    let userChoice = currentChecked.value;
    let computerChoice = randomThrow();
    
    const result = compare(userChoice, computerChoice);
    // alert(result)
    
    if ( result === 'you lose')  {
        gameLoss++
        resultsDisplay.textContent = 'sorry not today'
        losses.textContent = `Losses: ${gameLoss}`;

    }
    else if ( result === 'you win') {
        gameWin++
        resultsDisplay.textContent = 'winner winner chicken dinner!'
        wins.textContent = `Wins: ${gameWin}`;
    }
    else if ( result === 'draw') {
        gameTie++
        resultsDisplay.textContent = 'looks like we need to go again'
        draws.textContent = `Ties: ${gameTie}`;

    }

    
    
    const counter = document.querySelector('input:checked');


    if (counter === 'you lose') {
        winsVsLoss.value === 1 + 'my score is (winsVsLoss.value)'
    }

    console.log(counter);


});
// i still need to display the gameresults into a field on the screen
// i still need to display a counter with the wins and losses

