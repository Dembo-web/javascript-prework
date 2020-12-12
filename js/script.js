{

let playGame = function (playerInput){

  let randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);

  clearMessages();

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

  let displayResult = function (argComputerMove, argPlayerMove){

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

  console.log('Wylosowana liczba to: ' + randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove,playerMove);



  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1)
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2)
  });
  document.getElementById('play-sciss').addEventListener('click', function(){
    playGame(3)
  });

}
