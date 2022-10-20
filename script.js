'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovments = function (movements) {

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} 
          ${type}
          </div>
          <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html)
  })
}

displayMovments(account1.movements)

const calcDisplayMovements = function(movements){
  const incomes = movements.filter((mov)=> mov>0)
  .reduce((acc, mov) => acc + mov, 0) 
  console.log(incomes)
  labelSumIn.textContent = `${incomes}`
}
calcDisplayMovements(account1.movements)

const calcDisplayNegative = function(movements){
  const outcomer = movements.filter((mov) => mov < 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${outcomer}`
}
calcDisplayNegative(account1.movements)

const displayInsterst = function(interestRate){
  const interest = interestRate
  labelSumInterest.textContent = `${interest}`
}
displayInsterst(account1.interestRate)


// const createUsernames = funciton (user2) {
//   const usersNameClient = user2
//    .toUpperCase()
//    .split(" ")
//    .map((name1) => name1[0])
//    .join("")
//  };
 
// console.log()
    /////////////////->variables que deseamos///////
const createDB = function(accs){
accs.forEach(function(acc){
  acc.username = acc.owner
  .toLowerCase().split(" ").map(function(name){
      return name[0]
  }).join(" ")
})
}
createDB(accounts)
console.table(accounts)

const calbalaceUser = function( movements){
  const balanceUserDB = movements.reduce((acc, mov)=>{
   return acc + mov;
  }, 0)
  labelBalance.textContent = `${balanceUserDB} USD`
}
calbalaceUser(account1.movements)

/////////////////////////////////////////
// const checkDogs = function (dogsJulia, dogsKate){
//   const dogsJuliaCorrect = dogsJulia.slice();
//   dogsJuliaCorrect.splice(0,1)
//   dogsJuliaCorrect.splice(2)
//  const dogs = dogsJuliaCorrect.concat(dogsKate)
 
//   dogs.forEach(function (dog,i){
//     // if(dog>= 3){
//     //   console.log(`Dog number ${i + 1} is an adult, and is ${dog} years`)
//     // }else {
//     //   console.log(`Dog number ${i + 1} is an pupy, and is ${dog} pupy`)
//     // }

//      const Yearpuppy = dog >= 3 
//     ? `Dog number ${i + 1} is an adult, and is ${dog} years` 
//     : `Dog number ${i + 1} is an pupy, and is ${dog} pupy`

//     console.log(Yearpuppy)
//   })

// }

// checkDogs([3,5,2,12,7], [5,1,6,3,4] )

// const checkAge = function(firtYear, lastYear){
//   const firstYearAvaible = firtYear.slice();
//  // firstYearAvaible.splice(1,2)
//  // firstYearAvaible.splice(3)
//   //console.log(firstYearAvaible)
//   const students = firstYearAvaible.concat(lastYear)
//   console.table(students)

//     students.forEach(function(student, i){
//       const yearStudents = student >= 20 ? `The student ${i+1} can go to the party ${student}`
//       : `The student ${i+1} can not go to the party ${student}`;

//       console.log(yearStudents)
//     })
// }

// checkAge([16, 20, 21, 18,22], [21, 19, 28, 26, 25, 30])
//[5,1,6,3,4]
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);



/////////////////////////////////////////////////
/*
let arr = [ "a", "b", "c", "d", "e"];

//arr.slice(2); // This extract 
console.log( arr.slice(2));
console.log( arr.slice( 2, 4));
console.log( arr.slice( 0, 3))
console.log( arr.slice(-2))
console.log( arr.slice(-1))
console.log( arr.slice(1,-2))
console.log([...arr])// spread parametro to extrac data


// SPLICE
arr.splice(-1)
console.log(arr)
console.warn("////")
arr.splice(1, 2)
console.log(arr);

// REVERSE PARAMETRO

arr = ["a", "b", "c", "d", "e"]
const arr2 = [ "f", "t", "i", "m", "j"]
console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2)
console.log(letters);
console.log(...arr, ...arr2)

//JOIN
console.log(letters.join(" - "));


const arr = [23, 11,64]
console.log(arr[0])
///////
console.log(arr.at(0))

// getting the last array element
console.log( arr[arr.length -1]); // subtract the last number
console.log(arr.slice(-1)[0])
console.log(arr.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for( const [i, movement] of movements.entries() ){
  if(movement > 0){
    console.log( `Movements: ${i + 1}  You deposited ${movement}`);
  } else {
    console.log(` Movement: ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}
// we call the variable of the result 
console.log("---------------FOR EACH METHOD-------------")
movements.forEach(function(movement, index, array){// THIS part of the code we are using the callback to invocade
  if( movement > 0){// This is the 
    console.log(`Movements: ${index + 1 } You deposited ${movement}`);
  }else {
    console.log(`Movements: ${index + 1} You withdre ${Math.abs(movement)}`);
  }
});
/////////////////////////////////
const currencies2 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies2.forEach(function(value, key, map) {
  console.log( `${key}: ${value}` );
  
})

const currenciesUnique = new Set(["USD", "EUR", "Euro", "GBP", "Pound"]);
console.log(currenciesUnique)

currenciesUnique.forEach(function(value, _ , map){
  console.log(`${value}: ${value}`)
})



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroValue = 1.1

// const movementsUsd= movements.map(function(mov, i){
//   return mov * euroValue 
// })
// console.table(movementsUsd)

// const movementsUsd1 = movements.map((mov) =>{
//  return mov * euroValue
// })
// console.table(movementsUsd1)

// const movementsUsdFor = [];
// for ( const mov of movements) 
// movementsUsdFor.push(mov * euroValue)

// console.table( movementsUsdFor)

// movements.map((mov, i) => {
//   return `Movement ${i +1 } : You $ {mov > 0 ? "deposited : "withdraw} ${Math.abs(mov)}`
// })
// ///////////////////////////////////////////////

// const user = "Diego Francisco Lopez";
// const username = user.toLowerCase().split(" ").map(function(name) { 
//   return name [0]
// }).join("")
// console.log(username)

////  FILITER///////////////////////////////////////

// const deposits = movements.filter(function (mov){
//   return mov > 0 
// })
// console.log(movements)
// console.table(deposits)

// const depositsFor = []
// for (const mov of movements) if(mov > 0) depositsFor.push(mov)
// console.log(depositsFor)
// //////////////////////
// const withdraw = movements.filter(function (mov){
//   return mov < 0
// })
// console.table(withdraw)

// const withdrawFor = []
// for (const mov of movements) if ( mov < 0) withdrawFor.push(mov)
// console.log(withdrawFor)

// console.log(movements)
// const balancerOne = movements.reduce(function(acc, cur){
// //  console.log(`Interation ${i}: ${acc}` )
//   return acc + cur;

// }, 0)
// console.log(balancerOne);

// let balance2 = 0;
// for ( const mov of movements) balance2 += mov;


// const calcBalaceAccount = function(movements) {
//   const balanceAccount = movements.reduce(function(acc, mov){
//     return acc + mov;
//   }, 0)
//  labelBalance.textContent = `${balanceAccount} EUR`
// }
// calcBalaceAccount(account1.movements)
// console.log( calcBalaceAccount(account2.movements))




const calcPlusValue = function(movements) {
  const max = movements.reduce((acc, mov)=>{
     const max1 = acc > mov ? acc : mov;
     return max1;
  }, movements[0])
  console.log(max)
  labelBalance.textContent = `${max} USD`
}
calcPlusValue(account1.movements)

const calcAvarageHumanAge = function(age){
  const humans = age.map(age => (age <= 2 ? 2 * age : 16 + age * 4))

  const adults = humans.filter(age => age <= 18 )
  console.table(humans)
  console.log(adults)
                                                            // adults.length  arr.length, 0
  // const avarege = adults.reduce((acc, age) => acc + age, 0) / adults.length
  // return avarege

  const avaregeNum = adults.reduce((acc, age) =>
    acc + age, 0) / adults.length
  return avaregeNum
  console.log( avaregeNum)
}
 const avg1 = calcAvarageHumanAge([5,2,4,1,15,8,3])
 const avg2 = calcAvarageHumanAge([16,6,10,5,6,1,4])

 console.log( avg1, avg2)
 */////
 const euToUsd = 1.1;
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


 const totalDeposites = movements
 .filter(mov => mov > 0)
 .map((mov, i, arr) => {
    // console.log()
    // console.table(arr)
    return mov * euToUsd
 })
 .reduce((acc, mov) =>  acc + mov, 0)
 console.log(totalDeposites)
