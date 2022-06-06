option=['rock','paper','scissors'];
function game()
{
    playRound();
}
function playRound(){
    const playerSelection=playerChoices();
    const computerSelection=computerChoices();
    const winner=checkWinner(playerSelection,computerSelection);
    console.log(winner);
    
}

function computerChoices(){
    console.log(option[Math.floor(Math.random()*option.length)]);
    return option[Math.floor(Math.random()*option.lenght)];
   
    
}
 function playerChoices(){
     let input =prompt('type rock or paper or scissors ');
     while(input == null){
         input=prompt('type rock or paper or scissors');
     }
     input= input.toLowerCase();
     console.log(input);
 }
 function checkWinner(optionP,optionC){
     if(optionP==optionC)
     return 'tie';
     else if(
         (optionP=='rock' && optionC=='scissors') ||
         (optionP=='paper' && optionC=='rock') ||
         (optionP=='scissors' && optionC=='paper')
     )
     return 'player';
     else
     return 'computer';

 }
 game();