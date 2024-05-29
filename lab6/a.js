let numbers = [1, 2, 3, 4, 5];
let strings = ["apple", "banana", "cherry"];
let booleans = [true, false, true, false];
let mixed = [1, "apple", true, null, undefined];
let objects = [{name: "John"}, {name: "Jane"}, {name: "Jack"}];

numbers.push(6);
let lastNumber = numbers.pop();

strings.shift();
strings.unshift("avocado");

let combinedArray = numbers.concat(strings);

function swapDestructuring(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function swapTraditional(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function reverseArray(arr) {
    return arr.reverse();
}

function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

swapDestructuring(numbers, 0, 4);
swapTraditional(strings, 0, 2);

let reversedNumbers = reverseArray(numbers);
let doubledNumbers = doubleNumbers(numbers);
let evenNumbers = filterEvenNumbers(numbers);

console.log(numbers);
console.log(strings);
console.log(combinedArray);
console.log(reversedNumbers);
console.log(doubledNumbers);
console.log(evenNumbers);
