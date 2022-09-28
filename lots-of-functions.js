// #### `sayHi`

// Write a function called `sayHi` that takes in a name string and adds "Hi, " before the name.  Return the newly modified string.

console.log (`#1 sayHi problem: \n`)

function sayHi(name){
    return (`Hi, ${name}`)
}

console.log (sayHi("Enzo"))
console.log (sayHi("Greyson"))

console.log(`\n`)

// #### `bigString`

// Write a function called `bigString` that takes in 2 strings and returns which one is bigger.  If the strings are equal in size, tell the user and prints both.

console.log (`#2 bigString problem: \n`)

function bigString(a, b){
    if (a.length > b.length){
        console.log(a);
    } else if(a.length < b.length){
            console.log(b);
        } else if (a.length === b.length){
            console.log (`The strings ${a} and ${b} have the same size!`);
        }
    }
bigString("Wolf", "Dog");
bigString("Rat", "Snake");
bigString("Greyson", "Dominic");

console.log(`\n`)

// #### `bigNumber`

// Write a function called `bigNumber` that takes in 2 numbers and returns which one is greater. If the numbers are equal tell the user.

console.log (`#3 bigNumber problem: \n`)

function bigNumber(num1,num2){
    if (num1 > num2){
        console.log(num1);
    } else if(num1 < num2){
            console.log(num2);
        } else if (num1 === num2){
            console.log (`The numbers ${num1} and ${num2} are equal!`);
        }
}

bigNumber(5,2)
bigNumber(9,25)
bigNumber(10,10)

console.log(`\n`)

// #### `fiveMore`

// Write a function called `fiveMore` that takes in an array of numbers and adds 5 to each odd number then returns the updated array.

console.log (`#4 fiveMore problem: \n`)

let array1 = [1, 2, 3, 4, 5]
let array2 = [11, 22, 33, 44, 55]
let array3 = [111, 222, 333, 444, 555]

function fiveMore (myArray){
    for (let i = 0; myArray.length>i; i++){
        if (myArray[i] % 2 != 0){
            console.log (myArray[i] + 5)
        }
    }
}

fiveMore (array1)
console.log(`\n`)
fiveMore (array2)
console.log(`\n`)
fiveMore (array3)

console.log(`\n`)
// #### `arraySummer`

// Write a function called `arraySummer` that takes in an array of numbers and adds each number in the array together.  Return the total.

console.log (`#5 arraySummer problem: \n`)

array4 = [10,20,30,40,50,60]

function arraySummer(arraySum){
    
    let sum = 0

for (let i = 0; arraySum.length > i; i++){

    if (typeof arraySum[i] === "number"){
        sum = arraySum[i] + sum
    
    } else {
        return `Error! this array has strings`
    }
    }
    return sum
}

firstSum = arraySummer(array1)
secondSum = arraySummer(array2)
thirdSum = arraySummer(array3)
fourthSum = arraySummer(array4)

console.log(firstSum)
console.log(secondSum)
console.log(thirdSum)
console.log(fourthSum)

console.log(`\n`)
// #### `everyDivisible`

// Write a function called `everyDivisible` that takes in a number `n` that is less than 10 and then prints every number less than or equal to 100 that is divisible that number `n`.

console.log (`#6 everyDivisible problem: \n`)

// How might we create a program that takes a number variable "n" that always should be <= to 10, and then prints every number <= to 100 that is divisible for the number "n"

let number1 = 1
let number2 = 2
let number3 = 3
let number4 = 4


function everyDivisible(n){
    for (i = 0; 100 > i; i++){
        if (i % n === 0) {
            console.log(i);
        } 
    }
}

everyDivisible(number4)
