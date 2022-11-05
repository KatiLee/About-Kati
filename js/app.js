'use strict';
console.log('app js is connected');

//prompt our users for some input

let userName = prompt('What is your name?');

console.log('user name is: ', userName);


//convert to lowerCase

//userName.toLowerCase(); or the userName.toUpperCase();
let lowerCaseName = userName.toLowerCase();

console.log('Namer Lower Case: ', lowerCaseName);


//validate the input using some coditional logic
//if(meet this condition then do the else){

//} else {

//}
if(lowerCaseName === 'bob' || lowerCaseName === 'larry'){
  console.log('we are comparing lowercase:', lowerCaseName);
  console.log('we are using his user name he provided', userName);
  alert('Welcome back to the site: ' + userName);
} else {
  alert('Welcome new user to my page!');
}




//look at some data types: boolean, string, number,




//introduction to arrays


function question1(){
  
  if(true){
    alert('You\'re right!' );

  } else {
    alert('Incorrect');
  }
}
