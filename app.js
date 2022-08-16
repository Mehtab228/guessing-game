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
case 'y':
case 'yes':
  alert('You\'re correct!');
  break;
case 'no':
case 'n':
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
case 'yes':
case 'y':
  alert('You\'re correct!');
  break;
case 'no':
case 'n':
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
case 'yes':
case 'y':
  alert('You are correct!');
  break;
case 'no':
case 'n':
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
case 'yes':
case 'y':
  alert('You\'re right and you have great taste in tv shows!');
  break;
case 'no':
case 'n':
  alert('You need to watch the show!');
  break;
default:
  alert('Come on thats the 4th time! Try again!');
}

let basketball = prompt('Do I like to watch basketball? Please answer yes or no!')
if (typeof(basketball) === 'string'){
  basketball = basketball.toLowerCase();
}

switch (basketball){
case 'yes':
case 'y':
  alert('You\'re right');
  break;
case 'no':
case 'n':
  alert('Try again next time!');
  break;
default:
  alert('Try again next time!');
}



