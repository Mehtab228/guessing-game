'use strict';

function getName(){
  let user = prompt('What is your name?');
  if (user === '' || user === null || undefined) {
    alert('That\'s not a name try again!');
    getName();
  } else {
    alert('Hey ' + user + ' welcome to my page! ');
  }
}

getName();

let answer = prompt('Do I like the outdoors? Please answer yes or no');
if (typeof(answer) === 'string'){
  answer = answer.toLowerCase();
}

switch (answer){
case 'yes || y':
  alert('You\'re correct!');
  break;
case 'no || n':
  alert('Ah, try again next time!');
  break;
}



