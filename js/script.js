function playGame(playerInput){
  function clearMessages(){}

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamien';
    } else if (argMoveId == 2) {
      return 'papier'
    } else if (argMoveId == 3) {
      return 'nozyce'
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove){
    if (argComputerMove == 'kamien' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove =='kamien' && argPlayerMove == 'kamien') {
      printMessage('Remis!');
    } else if (argComputerMove =='kamien' && argPlayerMove == 'nozyce') {
      printMessage('Ja wygrywam!');
    } else if (argComputerMove =='papier' && argPlayerMove == 'kamien') {
      printMessage('Ja wygrywam');
    } else if (argComputerMove =='papier' && argPlayerMove == 'nozyce') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove =='papier' && argPlayerMove == 'papier') {
      printMessage('Remis!');
    } else if (argComputerMove =='nozyce' && argPlayerMove == 'kamien') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove =='nozyce' && argPlayerMove == 'papier') {
      printMessage('Ja wygrywam!');
    } else if (argComputerMove =='nozyce' && argPlayerMove == 'nozyce') {
      printMessage('Remis!');
    } else if (argComputerMove =='kamien' && argPlayerMove == 'nieznany ruch') {
      printMessage('Wynik nieznany!');
    } else if (argComputerMove =='papier' && argPlayerMove == 'nieznany ruch') {
      printMessage('Wynik nieznany!');
    } else if (argComputerMove =='nozyce' && argPlayerMove == 'nieznany ruch') {
      printMessage('Wynik nieznany!');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /* if(randomNumber == 1){
    computerMove = 'kamien';
  } else if(randomNumber == 2) {
    computerMove = 'papier';
  } else {
    computerMove = 'nozyce';
  } */

  printMessage('Mój ruch to: ' + computerMove);

  /* let playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nożyce.'); */

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  /* if(playerInput == '1'){
    playerMove = 'kamien';
  } else if (playerInput == '2') {
    playerMove = 'papier';
  } else if (playerInput == '3') {
    playerMove = 'nozyce';
  } else {
    playerMove = 'nieznany ruch';
  } */

  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove,playerMove);

  }

  document.getElementById('play-rock').addEventListener('click', playGame(1));
  document.getElementById('play-paper').addEventListener('click', playGame(2));
  document.getElementById('play-sciss').addEventListener('click', playGame(3));
