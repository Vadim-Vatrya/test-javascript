// 72.  Многомерные объекты в JavaScript

// 72.1  Дан следующий объект:
// Найдите сумму элементов приведенного объекта.

// let obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// console.log(
//   obj["key1"]["key1"] +
//     obj["key1"]["key2"] +
//     obj["key1"]["key3"] +
//     obj["key2"]["key1"] +
//     obj["key2"]["key2"] +
//     obj["key2"]["key3"] +
//     obj["key3"]["key1"] +
//     obj["key3"]["key2"] +
//     obj["key3"]["key3"]
// );

// 72.2 Дан следующий объект: Выведите на экран элемент 'b2' и элемент 'c1'.

// let obj = {
//   1: {
//     1: "a1",
//     2: "a2",
//     3: "a3",
//   },
//   2: {
//     1: "b1",
//     2: "b2",
//     3: "b3",
//   },
//   3: {
//     1: "c1",
//     2: "c2",
//     3: "c3",
//   },
// };

// console.log(obj[2][2]);
// console.log(obj[3][1]);

//  73.3  Найдите сумму всех элементов-чисел.

// let obj = {
//   key1: {
//     a: 1,
//     b: 2,
//     c: {
//       d: 3,
//       e: 4,
//     },
//     f: 5,
//   },
//   key2: {
//     g: 6,
//     h: 7,
//   },
// };

// console.log(
//   obj.key1.a +
//     obj.key1.b +
//     obj.key1.c.d +
//     obj.key1.c.e +
//     obj.key1.f +
//     obj.key2.g +
//     obj.key2.h
// );

// 74 Перебор многомерных объектов в JavaScript

//  74.1 Используя циклы, найдите сумму элементов этого объекта.

// let obj = {
//   1: {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   2: {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   3: {
//     1: 24,
//     2: 25,
//     3: 26,
//   },
// };

// let sum = 0;
// for (let key in obj) {
//   let subObj = obj[key];
//   for (let subKey in subObj) {
//     sum += subObj[subKey];
//   }
// }
// console.log(sum);

// 75 Ключи из переменных в многомерных структурах JavaScript

// 75.1 Выведите на экран название месяца, соответствующее значениям переменных lang и month.

// let months = {
//   ru: [
//     "январь",
//     "февраль",
//     "март",
//     "апрель",
//     "май",
//     "июнь",
//     "июль",
//     "август",
//     "сентябрь",
//     "октябрь",
//     "ноябрь",
//     "декабрь",
//   ],
//   en: [
//     "january",
//     "february",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december",
//   ],
// };
// let lang = "ru";
// let lang2 = "en";
// let month = 5;

// console.log(months[lang][month]);
// console.log(months[lang2][month]);

//  75.2 Дана вот такая структура для хранения списка дел за года, месяцы и дни.
// Пусть даны также 3 переменные, содержащие год, месяц и день.Выведите дело, соответствующее значениям переменных.

// let affairs = {
//   2018: {
//     11: {
//       29: ["дело111", "дело112", "дело113"],
//       30: ["дело121", "дело122", "дело123"],
//     },
//     12: {
//       30: ["дело211", "дело212", "дело213"],
//       31: ["дело221", "дело222", "дело223"],
//     },
//   },
//   2019: {
//     12: {
//       29: ["дело311", "дело312", "дело313"],
//       30: ["дело321", "дело322", "дело323"],
//       31: ["дело331", "дело332", "дело333"],
//     },
//   },
// };

// let year = "2018";
// let month = 11;
// let day = 30;
// console.log(affairs[year][month][day][1]);

// 75.3 Автор следующего кода хотел вывести элемент со значением '24'.
// Код, однако, выводит не то, что ожидал автор.Исправьте ошибку.

// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };

// let key1 = "key2";
// let key2 = "key4";

// 76 Многомерные массивы и объекты в JavaScript

// 76.1 Дан следующий массив работников:
// Выведите на экран сумму зарплат первого и второго работников.

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];

// console.log(employees[0]);
// console.log(employees[1]);
// console.log(employees[0].salary + employees[1].salary);
// console.log(employees[0]["salary"] + employees[1]["salary"]);

// 76.2 Дан следующий объект со студентами:
// Выведите на экран элемент 'Вася' и элемент 'Лена'.

let students = {
  boys: ["Коля", "Вася", "Петя"],
  girls: ["Даша", "Маша", "Лена"],
};

// console.log(students["boys"][1]);
// console.log(students.boys[1]);
// console.log(students.girls[2]);

// 77         Перебор многомерных комбинаций в JavaScript

// 77.1 Выведите на экран данные каждого работника в формате имя - зарплата.

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];

// for (let employee of employees) {
//   console.log(employee.name + " " + employee.salary + " <br>");
// }

// 77.2 Выведите на экран сумму зарплат всех работников.
// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];

// let sum = 0;

// for (let employee of employees) {
//   sum += employee.salary;
// }
// console.log(sum);

// 77.3 Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
//   {
//     name: "name4",
//     salary: 600,
//     age: 31,
//   },
//   {
//     name: "name5",
//     salary: 700,
//     age: 32,
//   },
// ];

// let sum = 0;

// for (let employee of employees) {
//   if (employee.age >= 30) {
//     sum += employee.salary;
//   }
// }
// console.log(sum);

// 77.4 Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет (true - уволен):
// Выведите на экран имена и зарплаты неуволенных работников.

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     dismissed: false,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     dismissed: true,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     dismissed: false,
//   },
//   {
//     name: "name4",
//     salary: 600,
//     dismissed: true,
//   },
//   {
//     name: "name5",
//     salary: 700,
//     dismissed: false,
//   },
// ];

// for (let employee of employees) {
//   if (!employee.dismissed) {
//     console.log(employee.name + " " + employee.salary + "<br>");
//   }
// };

//  77.5 С помощью вложенных циклов выведите на экран все строки с данными.

// let data = {
//   1: ["data11", "data12", "data13"],
//   2: ["data21", "data22", "data23"],
//   3: ["data31", "data32", "data33", "data34", "data35"],
//   4: ["data41", "data42"],
// };

// for (let group in data) {
//   // console.log(group);
//   for (let title of data[group]) {
//     console.log(title);
//   }
// };

// 77.6 Количество объектов в массиве и количество элементов в объекте может быть произвольным. С помощью вложенных циклов выведите на экран все строки с данными.

// let data = [
//   {
//     1: "data11",
//     2: "data12",
//     3: "data13",
//     4: "data14",
//   },
//   {
//     1: "data21",
//     2: "data22",
//     3: "data33",
//   },
//   {
//     1: "data31",
//     2: "data32",
//   },
// ];

// for (let group of data) {
//   // console.log(group);
//   for (let key in group) {
//     console.log(group[key]);
//   }
// }

// 77.6 С помощью вложенных циклов выведите на экран все строки с данными.
// let data = [
//   {
//     1: ["data111", "data112", "data113"],
//     2: ["data121", "data122", "data123"],
//   },
//   {
//     1: ["data211", "data212", "data213"],
//     2: ["data221", "data222", "data223", "data224"],
//     3: ["data231", "data232", "data233", "data234", "data235"],
//   },
//   {
//     1: ["data411", "data412", "data413"],
//     2: ["data421"],
//   },
// ];

// for (let obj of data) {
//   // console.log(data[obj]);
//   for (let group in obj) {
//     // console.log(group);
//     for (let elem of obj[group]) {
//       console.log(elem);
//     }
//   }
// }
