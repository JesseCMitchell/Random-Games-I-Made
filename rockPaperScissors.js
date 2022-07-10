const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    }else{
        console.log('Error: Incorrect choice!');
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
};

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return 'Tie game!'
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
        return 'Computer wins...'
        }else{
        return 'You win!'
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
        return 'Computer wins...'
        }else{
        return 'You win!'
        }
    }
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
        return 'Computer wins...'
        }else{
        return 'You win!'
        }
    }
    if(userChoice === 'bomb'){
    return 'KABOOOOOOOM! You win!!!'
        }
};
// console.log(determineWinner('rock', 'rock'));

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('-------------------------------------------');
    console.log('You throw: ' + userChoice);
    console.log('Computer throws: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    console.log('-------------------------------------------');
};
playGame();