//This is the solution to the Gen Buzz Challenge
let myNumber=30;
myNUmber=typeof 45;
if (isNaN(myNumber)){
    console.log('This is not a number ');
}
if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log("GenBuz");
}
    else if(myNumber % 3 === 0 && myNumber % 5 != 0){
      console.log("Gen");
}
else if(myNumber % 3 != 0 && myNumber % 5 === 0){
     console.log("Buzz");}
    else {
       console.log(myNumber);
    }
// Challenge NUmber2// I want to make it more dynamic with string literals & Math.random even though it is not logical 
//to have a random price. But at least we have a random chance to play ;) 
var price = 50;
price = Math.floor(Math.random() * 200);
 let item='Jeans';
switch (item) {
     case 'shoes':
         console.log(`The price of shoes is ${price}$`);
         break;
      case 'Jeans':
         console.log(`The price of Jeans is ${price}$`);
         break;
      case 'Hat':
         console.log(`The price of shoes is ${price}$`);
        break;
     case 'Sockes':
         console.log(`The price of shoes is ${price}$`);
         break;
     default:
         console.log('Invalid Item')
        
}
//Challenge #3
let num = 50;
if (num <= 100) {
    console.log(Math.floor(Math.random()*100));
}