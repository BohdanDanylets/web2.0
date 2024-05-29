// Функція, що перевіряє тип даних та повертає відповідний рядок
function checkDataTypeDeclaration(data) {
  if (typeof data === "number") {
    return "Number";
  } else if (typeof data === "string") {
    return "String";
  } else if (typeof data === "boolean") {
    return "Boolean";
  } else if (typeof data === "object") {
    return "Object";
  } else {
    return "Unknown";
  }
}

// Функція, що повертає рядок у зворотньому порядку
const reverseString = function (str) {
  return str.split("").reverse().join("");
};

// Функція, що перевіряє число на парність
const checkEvenOdd = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

// Функція, що змінює дані в залежності від їх типу
const manipulateDataSwitch = (data) => {
  switch (typeof data) {
    case "number":
      return data * 2;
    case "string":
      return data.toUpperCase();
    case "boolean":
      return !data;
    default:
      return "Cannot manipulate this type of data";
  }
};

// Аналогічна функція, але з використанням умовних операторів if-else
const manipulateDataIfElse = (data) => {
  if (typeof data === "number") {
    return data * 2;
  } else if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "boolean") {
    return !data;
  } else {
    return "Cannot manipulate this type of data";
  }
};

// Клас, що представляє тварину
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Клас, що представляє собаку і розширює клас Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

// Клас, що представляє кота і розширює клас Animal
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

// Виклики функцій і створення екземплярів класів для демонстрації
console.log(checkDataTypeDeclaration(42)); // Number
console.log(reverseString("hello")); // olleh
console.log(checkEvenOdd(7)); // Odd
console.log(manipulateDataSwitch(true)); // false
console.log(manipulateDataIfElse([1, 2, 3])); // Cannot manipulate this type of data

const myDog = new Dog("Buddy");
const myCat = new Cat("Fluffy");

console.log(myDog instanceof Animal); // true
console.log(myCat instanceof Animal); // true
