// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];
// const getNamesByGrade = students.map((student) => {
//   let grade;
//   if (student.percent >= 85) {
//     grade = 5;
//   } else if (student.percent >= 70) {
//     grade = 4;
//   } else {
//     grade = 3;
//   }
//   return {
//     ...student,
//     grade,
//   };
// });
// console.log(getNamesByGrade);

// const filtered = getNamesByGrade.filter((student) => {
//   return student.grade === 5;
// });
// console.log(filtered);

// let massive = [1, 2, 3, 4, 5, 6, 7];
// const oshiramiz = massive.map((massive) => {
//   return massive * massive;
// });
// console.log(oshiramiz);

// let isimlar = "George Raymond Richard Martin";
// const massive = isimlar.split(" ");
// const harflar = massive.map((soz) => {
//   return soz[0];
// });
// const natija = harflar.join("");
// console.log(natija);

// let odamlar = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];
// const youngOldAge = odamlar.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(youngOldAge);

// const engYosh = youngOldAge[0].age;
// const engQari = youngOldAge[youngOldAge.length - 1].age;
// const farq = engQari - engYosh;
// console.log(farq);

// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const Juft = massiv.filter((num) => {
//   return num % 2 === 0;
// });
// const toq = massiv.filter((num) => {
//   return num % 2 !== 0;
// });
// console.log(Juft);
// console.log(toq);

// let products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
//   { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
// ];
// const sorted = products.sort((a, b) => {
//   return b.id - a.id;
// });
// // console.log(sorted);
// const sortbyprice = products.sort((a, b) => {
//   return a.price - b.price;
// });
// // console.log(sortbyprice);
// const sortbyrating = products.sort((a, b) => {
//   return a.rating - b.rating;
// });
// // console.log(sortbyrating);
// const sortbydiscount = products.sort((a, b) => {
//   return a.discount - b.discount;
// });
// console.log(sortbydiscount);

// let products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
//   { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
// ];
// const Allname = products.map((name) => {
//   return name.name;
// });
// console.log(Allname);

// let products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
//   { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
// ];
// const finder = products.find((products) => {
//   return products.id === 5;
// });
// console.log(finder);

// const optasha = products.filter((products) => {
//   return products.id !== 4;
// });
// console.log(optasha);

// const passwords = ["qwertry", "123456", "secret99", "pass123"];
// let p = passwords.every((password) => password.length >= 6);
// console.log(p);

// const numbers = [1, 1, 2, 3, 4, 5];
// const squrez = [];
// const newArr = numbers.forEach((number) => squrez.push(number ** 2));
// console.log(squrez);

// ==========================reduce=================
