let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamien';
} else if(randomNumber == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nozyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamien';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nozyce';
} else {
  playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamien' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if (computerMove =='kamien' && playerMove == 'kamien') {
  printMessage('Remis!');
} else if (computerMove =='kamien' && playerMove == 'nozyce') {
  printMessage('Ja wygrywam!');
} else if (computerMove =='papier' && playerMove == 'kamien') {
  printMessage('Ja wygrywam');
} else if (computerMove =='papier' && playerMove == 'nozyce') {
  printMessage('Ty wygrywasz!');
} else if (computerMove =='papier' && playerMove == 'papier') {
  printMessage('Remis!');
} else if (computerMove =='nozyce' && playerMove == 'kamien') {
  printMessage('Ty wygrywasz!');
} else if (computerMove =='nozyce' && playerMove == 'papier') {
  printMessage('Ja wygrywam!');
} else if (computerMove =='nozyce' && playerMove == 'nozyce') {
  printMessage('Remis!');
} else if (computerMove =='kamien' && playerMove == 'nieznany ruch') {
  printMessage('Wynik nieznany!');
} else if (computerMove =='papier' && playerMove == 'nieznany ruch') {
  printMessage('Wynik nieznany!');
} else if (computerMove =='nozyce' && playerMove == 'nieznany ruch') {
  printMessage('Wynik nieznany!');
}
