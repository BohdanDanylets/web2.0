// Об'єкт з полями name і age
let obj1 = {
    name: "Alice",
    age: 25
};

// Об'єкт з полями isActive (логічне значення) і scores (масив чисел)
let obj2 = {
    isActive: true,
    scores: [10, 20, 30]
};

// Об'єкт з полями id (число) і data (об'єкт з полями field1 і field2)
let obj3 = {
    id: 1,
    data: {
        field1: "value1",
        field2: "value2"
    }
};

// Об'єкт з методом calculate
let obj4 = {
    calculate: function(a, b) {
        return a + b;
    }
};

// Об'єкт зі звичайним властивостям set, що містить Set
let obj5 = {
    set: new Set([1, 2, 3])
};

// Додавання нової властивості gender до obj1
obj1.gender = "female";
// Додавання нового значення до масиву scores в obj2
obj2.scores.push(40);
// Додавання нової властивості field3 до об'єкта data в obj3
obj3.data.field3 = "value3";

// Зміна вже існуючих властивостей
obj1.age = 26;
obj2.isActive = false;
obj3.id = 2;

// Додавання властивості status до obj1 на основі умови
if (obj1.age > 25) {
    obj1.status = "Adult";
} else {
    obj1.status = "Young";
}

// Функція, що повертає назву дня тижня за числовим індексом
function getDayOfWeek(day) {
    let dayName;
    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }
    return dayName;
}

console.log(getDayOfWeek(3)); // "Wednesday"

// Клонування об'єкта obj1 та додавання нової властивості country
let obj6 = Object.assign({}, obj1, { country: "Ukraine" });
console.log(obj6);

// Заморожування об'єкта obj7, так щоб не можна було змінювати його властивості
let obj7 = Object.freeze({ name: "Bob", age: 30 });
console.log(obj7);

// Перевірка, чи можна змінювати властивості замороженого об'єкта
obj7.age = 31;
console.log(obj7.age); // Значення залишається 30, оскільки об'єкт заморожений

// Отримання масиву ключів об'єкта obj1
let keys = Object.keys(obj1);
console.log(keys);

// Отримання масиву масивів [ключ, значення] для кожної властивості об'єкта obj1
let entries = Object.entries(obj1);
console.log(entries);
