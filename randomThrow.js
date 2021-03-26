export function randomThrow(){
   const randomNumber = Math.floor(Math.random() * 3);
if(randomNumber === 0){
    return 'rock';
} 
    else if (randomNumber === 1) {
    return 'paper';
}
    else if(randomNumber === 2) {
    return 'scissor';
}
    else if(randomNumber > 1 && randomNumber < 2) {
    return 'scissor';
}
    else if(randomNumber === 1 && randomNumber >0) {
    return 'paper';
}   
    else if(randomNumber === 2 || (randomNumber === 1 && randomNumber < 2)) {
    return 'rock';
}
    else return 'scissor';
    
    console.log(randomNumber);
}