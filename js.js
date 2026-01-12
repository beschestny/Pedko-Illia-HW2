
// =======1) You are given two arrays: ['a', 'b', 'c'] and [1, 2, 3]. Merge them together.=========
const str = ['a', 'b', 'c', 'd'];
const num = [1, 2, 3];
// const array = str.concat(num);
// console.log(array);

// 2) Given an array ['a', 'b', 'c']. Add elements 1, 2, 3 to the end (using push and splice)
// str.push(1, 2, 3);
// console.log(str);

str.splice(4, 0, 1, 2, 3);
console.log(str);

// 3) Given an array [1, 2, 3, 4, 5]. Using the splice method, transform the array into [1, 4, 5].

let num1 = [1, 2, 3, 4, 5];
// num1.splice(0, 5,1, 4, 5 );
// console.log(num1);
//
// num1.splice(1, 2);
// console.log(num1);

// 4) Given an array [1, 2, 3, 4, 5]. Using the splice method, make an array from it [1, 2, 3, 'a', 'b', 'c', 4, 5].

num1.splice(3, 0, 'a', 'b', 'c');
console.log(num1);

// 5) Given an array const arr = [1, 2, 3, 4, 5]. Create a new empty array arr1. Loop through array
// arr using a for loop, multiply each element of array arr by 10 and place the result in array arr1.

const arr = [1, 2, 3, 4, 5];
const arr1 = [];

for (let i = 0; i < arr.length; i++) {
    let result = arr[i] *10
    arr1.push(result);
}
console.log(arr1);

// 6) Display numbers from 4 to 400 on the screen.

for (let i = 4; i <= 400; i++) {
    //console.log(i);
}

// 7) Print the numbers in sequence: 4 7 10 13 using a loop.

for (let i = 4; i <= 13; i+=3) {
    console.log(i);
}

// 8) Output the numbers 654 653 652 to zero.

for (let i = 654; i >= 0; i--) {
    // console.log(i);
}

// 9) Display all years from 1983 to 2017

for ( let i = 1983; i <= 2017; i++) {
    // console.log(i);
}

// 10) Print the numbers -4 -2 0 2 4 6 ...100.

for ( let i = -4 ; i <= 100; i+=2) {
    // console.log(i);
}

// 11) Find the sum of numbers from 0 to 100 (inclusive). (0+1+2+3+4+5)

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;

}
console.log(sum);

// 12) Fill the array as follows: enter 'x' in the first element, 'xx' in the second, 'xxx' in the third,
// and so on. Enter the array length at the prompt.

let a = +prompt('Enter a number');
let arrayOfx = []

for ( let i = 1; i <= a; i++){
    arrayOfx.push('x'.repeat(i));
}
console.log(arrayOfx);

