let num = 10; // Ціле число
let str = "Hello, World!"; // Рядок
let bool = true; // Логічне значення true
let obj = {name: "Alice", age: 25}; // Об'єкт з полями name і age
let arr = [1, 2, 3, 4, 5]; // Масив чисел
let undef; // Неініціалізована змінна
let nul = null; // Значення null
let symbol = Symbol("id"); // Символьний тип
let bigint = 9007199254740991n; // Велике ціле число
let func = function() { return "I'm a function"; }; // Функція

console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object" (масив теж є об'єктом)
console.log(typeof undef); // "undefined"
console.log(typeof nul); // "object" (особливість JavaScript)
console.log(typeof symbol); // "symbol"
console.log(typeof bigint); // "bigint"
console.log(typeof func); // "function"

let a = 5;
let b = 3;

a += b; // a = a + b
console.log("a += b:", a); 

a -= b; // a = a - b
console.log("a -= b:", a); 

a *= b; // a = a * b
console.log("a *= b:", a); 

a /= b; // a = a / b
console.log("a /= b:", a); 

a %= b; // a = a % b
console.log("a %= b:", a); 

let x = true;
let y = false;

console.log("x && y:", x && y); // true && false = false
console.log("x || y:", x || y); // true || false = true
console.log("!x:", !x); // !true = false

let m = 5; 
let n = 3; 

console.log("m & n:", m & n); // 5 & 3 = 1
console.log("m | n:", m | n); // 5 | 3 = 7
console.log("m ^ n:", m ^ n); // 5 ^ 3 = 6
console.log("~m:", ~m); // ~5 = -6
console.log("m << 1:", m << 1); // 5 << 1 = 10
console.log("m >> 1:", m >> 1); // 5 >> 1 = 2
console.log("m >>> 1:", m >>> 1); // 5 >>> 1 = 2
