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

let outdoors = prompt('Do I like the outdoors? Please answer yes or no');
if (typeof(outdoors) === 'string'){
  outdoors = outdoors.toLowerCase();
}

switch (outdoors){
case 'yes' || 'y':
  alert('You\'re correct!');
  break;
case 'no || n':
  alert('Ah, try again next time!');
  break;
default: 
  alert('Try again next time!');
}

let pollen = prompt('Is pollen the worst? Please answer yes or no!');
if (typeof(pollen) === 'string'){
  pollen = pollen.toLowerCase();
}

switch (pollen){
case 'yes' || 'y':
  alert('You\'re correct!');
  break;
case 'no || n':
  alert('Come on it\'s literally the worst!');
  break;
default:
  alert('Try again next time!');
}

let sushi = prompt('Do I like sushi? Please answer yes or no!');
if (typeof(sushi) === 'string'){
  sushi = sushi.toLocaleLowerCase();
}

switch (sushi){
case 'yes' || 'y':
  alert('You are correct!');
  break;
case 'no' || 'n':
  alert('Try again next time!');
  break;
default:
  alert('You don\'t like following instructions do you?');
}

let newgirl = prompt('Is New Girl one of my favourite shows? Please answer yes or no!');
if (typeof(newgirl) === 'string'){
  newgirl = newgirl.toLocaleLowerCase();
}

switch (newgirl){
case 'yes' || 'y':
  alert('You\'re right and you have great taste in tv shows!');
  break;
case 'no' || 'n':
  alert('You need to watch the show!');
  break;
default:
  alert('Come on thats the 4th time! Try again!');
}



