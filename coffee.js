//////////////////////////////////////////////////printMessage
const printWelcome = () => {
console.log("Welcome to our cafe!");
console.log("Please choose size of cups: \n");  
};

///////////////////////////////////////////ShowCupsOptions

function ShowCupsOptions() {
  let smallCup = "Size S (Small cup)";
  let mediumCup = "Size M (Medium cup)";
  let largeCup = "Size L (Large cup)";
  let price = 8;
  let cups = [smallCup, mediumCup, largeCup];

  for (let i = 0; i < cups.length; i++) {
    if(cups[i] === smallCup) {
      console.log(`The price ${smallCup} = $ ${price}`);
    }
    else if(cups[i] === mediumCup) {
      console.log(`The price ${mediumCup} = $ ${price * 1.2}`);
    }
    else if(cups[i] === largeCup) {
      console.log(`The price ${largeCup} = $ ${price * 1.5}`);
    }
  }  
   
}
//////////////////////////////////////////////////getCupPrice
function getCupPrice(cupSize){
  let price = 8;
  if(cupSize == "small") {
    return price;
  }
  else if(cupSize == "medium"){
    return price *= 1.2;
  }
  else if(cupSize == "large"){
    return price *= 1.5;
  }
}

//////////////////////////////////////////////////CoffeeType

function chooseCoffeeType(coffeeType){
  let espresso = "Espresso";
  let cappuccino = "Cappuccino";
  let latte ="Latte";
  let arabica = "arabica beans";
  let robusta = "robusta beans";
  let liberica = "liberica beans"; 

  console.log(`We have three types of coffee, choose: \n ${arabica} \n ${robusta}\n ${liberica}:`);
  console.log(`Choose the coffee: \n ${espresso} \n ${cappuccino} \n ${latte} \n`); 

  let arrTypeCoffee = [espresso, cappuccino, latte];

  for(let i = 0; i < arrTypeCoffee.length; i++) {
    if (coffeeType === arabica && arrTypeCoffee[i] === espresso) {
      console.log(`Your choose ${arrTypeCoffee[i]} with ${arabica}`);
      return;
    }
    else if(coffeeType === robusta && arrTypeCoffee[i] === cappuccino) {
      console.log(`Your choose ${arrTypeCoffee[i]} with ${robusta}`);
      return;
    }
    else if(coffeeType === liberica && arrTypeCoffee[i] === latte) {
      console.log(`Your choose ${arrTypeCoffee[i]} with ${liberica}`);
      return;
    }
  }

  console.log("Invalid input.");
}

//////////////////////////////////////////////////lactoseFree

function ChooseLactoseFree(lactoseFree) {
  if (lactoseFree == "yes") {
    return true;
  } else {
    return false;
  }
}

// console.log(printWelcome());
// console.log(ShowCupsOptions());
//////////////////////////////////////////////////ShowRecipeClient

function ShowRecipeClient(cupSize, coffeeType, lactoseFree){
let price = getCupPrice(cupSize);
let water = "Hot water";
let milk = "Milk";

let order = `You choosed a ${cupSize} cup of ${coffeeType}.  Follow the steps:`;
let step1 = `Take a ${cupSize} cup`;
let step2 = `Put one spoon of coffee in cup`;
let step3 = `Pour ${water} in a cup with coffee`;
let step4 = `Pour ${milk} in a cup with coffee `;
let orderPrice = `Your order price is ${price} $`;
let results = `Enjoy your coffee!`;

let recipe = [step1, step2, step3, step4];
let stepNumber = 1;
let clientRecipe = '';
for(let i = 0; i <recipe.length; i++) {
  if((lactoseFree === 'yes' && recipe[i] ==step4) || (lactoseFree === 'no' && recipe[i] ==step3 ))continue 
  clientRecipe += (stepNumber ++) + recipe[i] + '\n'; 

  } 
 console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + results);
}

console.log(printWelcome()); 
console.log(ShowCupsOptions());
console.log("************************"); 
console.log(chooseCoffeeType());
console.log("======================="); 
console.log(ShowRecipeClient('small', 'Cappuccino','yes')); 


