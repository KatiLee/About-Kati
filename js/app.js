'use strict';
console.log('Sup nerds?');

let userPoints = 0;
let catQuestion;
let dogQuestion;
let snowQuestion;
let christmasQuestion;
let houseplantQuestion;
let motorcycleQuestion;



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

catQuestion = prompt ('Do I have a cat?');
if(catQuestion === 'y' || catQuestion === 'yes'){
  alert('You\'re right, she does. His name is Roary and he is most handsome-ist lil gentleman!');
userPoints++;
} else {
  alert ('You\'re wrong, I do!');
}

dogQuestion = prompt ('Do I have a dog?');
if(dogQuestion === 'n' || dogQuestion === 'no'){
  alert('Yeah, I don\'t and I am super sad about it, ok? I don\'t want to talk about it!');
  userPoints++;
} else {
  alert ('Nope, I don\'t.');
}

snowQuestion = prompt ('Am I ready for snow?');
if(snowQuestion === 'y' || snowQuestion ==='yes'){
  alert('Heck yeah, bring it on! The more the merrier!');
  userPoints++;
} else {
  alert ('Sorry, but you are incorrect. I always wish for snow by my birthday.');
}

christmasQuestion = prompt ('Do I like Christmas?');
if(christmasQuestion === 'n' || christmasQuestion === 'no'){
  alert('Brah, December is totally not a great time for me, there are five birthdays in my family including mine. By Christmas I am pretty tapped out!');
  userPoints++;
} else {
  alert ('Nah, my guy. If I could skip December, I would.');
}

houseplantQuestion = prompt ('Am I an indoor gardener?');
if (houseplantQuestion === 'y' || houseplantQuestion === 'yes'){
  alert ('Very much so, I am obsessed with my potted plant collection!');
  userPoints++;
} else {
  alert ('Not so, I have quite the collection that is literally growing by the day!');
}

motorcycleQuestion = prompt ('How many motorcycles do you think I have? Try guessing between 0 to 10.');
if (motorcycleQuestion = 4){
  
}


