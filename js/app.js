'use strict';
console.log('Sup nerds?');

let userPoints = 0;

let userName = prompt('What is your name?');
console.log('user name is: ', userName);
let lowerCaseName = userName.toLowerCase();
console.log('Name Lower Case: ', lowerCaseName);

if(lowerCaseName === 'bob' || lowerCaseName === 'larry'){
  console.log('we are comparing lowercase:', lowerCaseName);
  console.log('we are using his user name he provided', userName);
  alert('Welcome back to the site: ' + userName);
} else {
  alert('Welcome new user to my page!');
}

let catQuestion;
let dogQuestion;
let snowQuestion;
let christmasQuestion;
let plantsQuestion;

catQuestion = prompt ('Do I have a cat?');
if(catQuestion === 'y' || catQuestion === 'yes'){
alert('You\'re right, she does. His name is Roary and he is most handsome-ist lil gentleman!');
userPoints++;
} else {
  alert ('You\'re wrong, I do!');
}

dogQuestion = prompt ('Do I have a dog?');
if(dogQuestion === 'n || dogQuestion === 'no'){
  alert('Yeah, I don\'t and I am super sad about it, ok? I don\'t want to talk about it!');
userPoints++;
} else {
  alert ('Nope, I don\'t.');
}

