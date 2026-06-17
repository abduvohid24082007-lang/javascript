// let students = [
//   { id: 1, name: "Ali", age: 20 },
//   { id: 2, name: "Vali", age: 22 },
// ];

// function qoshamiz(id, name, age) {
//   const newuser = {
//     id: students.length + 1,
//     name: name,
//     age: age,
//   };
//   students.push(newuser);
//   return newuser;
// }

// console.log(qoshamiz(3, "Gani", 19));
// console.log(students);

// function getStudents() {
//   students.forEach((student) => {
//     console.log(
//       `idsi ${student.id}, ismi ;${student.name} yoshi :${student.age}`,
//     );
//   });
// }
// getStudents();

// let students = [
//   { id: 1, name: "Ali", age: 20 },
//   { id: 2, name: "Vali", age: 22 },
// ];
// function updateAge(id, newAge) {
//   const natija = students.find((student) => student.id === id);
//   if (natija) {
//     natija.age = newAge;
//   }
// }
// updateAge(1, 25);
// console.log(students);

// let students = [
//   { id: 1, name: "Ali", age: 20 },
//   { id: 2, name: "Vali", age: 22 },
//   { id: 3, name: "Hasan", age: 19 },
// ];

// function deleteStudent(id) {
//   students = students.filter(function (student) {
//     return student.id !== id;
//   });
// }

// deleteStudent(2);

// console.log(students);

// let carts = [
//   {
//     id: 1,
//     name: "telefon",
//     price: 300,
//     quantity: 5,
//   },
//   {
//     id: 2,
//     name: "quloqchin",
//     price: 70,
//     quantity: 8,
//   },
//   {
//     id: 3,
//     name: "powerbank",
//     price: 50,
//     quantity: 15,
//   },
// ];
// function addToCart(product) {
//   let maxsulot = carts.find((cart) => cart.id === product.id);
//   if (maxsulot) {
//     maxsulot.quantity += product.quantity;
//   } else {
//     carts.push(product);
//   }
// }

// addToCart({ id: 1, quantity: 2 });
// console.log(carts);

// function changeQuantity(id, count) {
//   let tovar = carts.find((cart) => cart.id === id);
//   if (tovar) {
//     tovar.quantity = count;
//   }
// }
// changeQuantity(2, 10);
// console.log(carts);

// function removeFromCart(id) {
//   carts = carts.filter((cart) => cart.id !== id);
// }
// removeFromCart(2);
// console.log(carts);

// let tasks = [
//   {
//     id: 1,
//     task: "English o'rganish",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     task: "Sport bilan shug'ullanish",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     task: "Kitob o'qish",
//     isCompleted: true,
//   },
//   {
//     id: 4,
//     task: "Uy vazifasini bajarish",
//     isCompleted: false,
//   },
// ];
// function addTask(taskMatni) {
//   const newtask = {
//     id: tasks.length + 1,
//     task: "koreys tilig organish",
//     isCompleted: false,
//   };
//   tasks.push(newtask);
//   return newtask;
// }
// addTask("koreys tili organis");
// console.log(tasks);
