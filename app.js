'use strict';

let score = 0;

function getName() {
  let user = prompt('What is your name?');
  if (user === '' || user === null || undefined) {
    alert('That\'s not a name try again!');
    getName();
  } else {
    alert('Hey ' + user + ' welcome to my page! ');
  }
}

getName();

function questionOne() {
  let outdoors = prompt('Do I like the outdoors? Please answer yes or no');
  while (outdoors === null || outdoors === '') {
    alert('Please follow the instuctions you potato.');
    outdoors = prompt('Do I like the outdoors? Please answer yes or no');
  }
  outdoors = outdoors.toLowerCase();
  switch (outdoors) {
  case 'y':
  case 'yes':
    alert('You\'re correct!');
    score++;
    break;
  case 'no':
  case 'n':
    alert('Incorrect Answer!');
    break;
  default:
    alert('Try again next time!');
  }
}

questionOne();

function questionTwo() {
  let pollen = prompt('Is pollen the worst? Please answer yes or no!');
  while (pollen === null || pollen === '') {
    alert('Please follow the instuctions you.');
    pollen = prompt('Do I like the outdoors? Please answer yes or no');
  }
  pollen = pollen.toLowerCase();
  switch (pollen) {
  case 'yes':
  case 'y':
    alert('You\'re correct!');
    score++;
    break;
  case 'no':
  case 'n':
    alert('Come on it\'s literally the worst!');
    break;
  default:
    alert('Try again next time!');
  }
}
questionTwo();

function questionThree() {
  let sushi = prompt('Do I like sushi? Please answer yes or no!');
  while (sushi === null || sushi === '') {
    alert('Please follow the instuctions.');
    sushi = prompt('Do I like the outdoors? Please answer yes or no');
  }
  sushi = sushi.toLocaleLowerCase();
  switch (sushi) {
  case 'yes':
  case 'y':
    alert('You are correct!');
    score++;
    break;
  case 'no':
  case 'n':
    alert('Incorrect Answer!');
    break;
  default:
    alert('You don\'t like following instructions do you?');
  }
}
questionThree();

function questionFour(){
  let newgirl = prompt('Is New Girl one of my favourite shows? Please answer yes or no!');
  while (newgirl === null || newgirl === ''){
    alert('Please follow the instructions');
    newgirl = prompt('Is New Girl one of my favourite shows? Please answer yes or no!');
  }
  newgirl = newgirl.toLocaleLowerCase();
  switch (newgirl) {
  case 'yes':
  case 'y':
    alert('You\'re right and you have great taste in tv shows!');
    score++;
    break;
  case 'no':
  case 'n':
    alert('You need to watch the show!');
    break;
  default:
    alert('Come on thats the 4th time! Try again!');
  }
}
questionFour();

function questionFive(){
  let basketball = prompt('Do I like to watch basketball? Please answer yes or no!');
  while (basketball === null || basketball === '') {
    alert('Please follow the instructions!');
    basketball = prompt('Do I like to watch basketball? Please answer yes or no!')
  }
  basketball = basketball.toLowerCase();
  switch (basketball) {
  case 'yes':
  case 'y':
    alert('You\'re right');
    score++;
    break;
  case 'no':
  case 'n':
    alert('Incorrect Answer!');
    break;
  default:
    alert('Try again next time!');
  }
}
questionFive();

let questions = [
  'How many highschools have I attended?'
];

let answers = [
  '4'
];

for (let i = 0; i < 4; i++) {
  let response = prompt(questions[0]);
  if (response === answers[0]) {
    alert('You are correct!');
    score++;
    break;
  }
  else if (response === '1' || response === '2') {
    alert('Guess is way too low');
  }
  else if (response === '3') {
    alert('you\'re so close!');
  }
}



let newquestions = [
  'What is my favourite movie?'
];

let newanswers = [
  'The Other Guys',
  'Hot Fuzz',
  'Harry Potter and the Prisoner of Azkaban'
];

let guess = false;
for (let i = 0; i < 6; i++) {
  console.log('I loop ', i);
  if (guess === true) {
    console.log('Guess is true, break i loop');
    break;
  }
  let response = prompt(newquestions[0]);
  response = response.toLowerCase();
  for (let j = 0; j < newanswers.length; j++) {
    console.log('J loop ', j);
    if (response === newanswers[j].toLowerCase()) {
      alert('You are correct!');
      score++;
      guess = true;
      break;
    }
    else {
      console.log(newanswers[j] + ' is wrong');
    }

  } if (guess === false) {
    alert('Hint: Think of Wizards and a prisoner!');
  }
}
alert('Correct answers were The Other Guys, Hot Fuzz, and Harry Potter and the Prisoner of Azkaban');

alert('You scoured ' + score + ' out of 7');
