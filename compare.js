export function compare(usersChoice, computerChoice) {
    if(usersChoice === computerChoice) {
    return 'draw';
    }
    else if(usersChoice === 'rock' && computerChoice === 'paper') {
    return 'you lose';
    }
    else if(usersChoice === 'rock' && computerChoice === 'scissor') {
    return 'you win';
    }
    else if(usersChoice === 'paper' && computerChoice === 'rock') {
    return 'you win';
    }
    else if(usersChoice === 'paper' && computerChoice === 'scissor') {
    return 'you lose';
    }
    else if(usersChoice === 'scissor' && computerChoice === 'rock') {
    return 'you lose';
    }
    else if(usersChoice === 'scissor' && computerChoice === 'paper') {
        return 'you win';
}}
