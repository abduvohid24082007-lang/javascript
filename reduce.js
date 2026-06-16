// //  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va
// // reduce)
// // Input: [ 1, -4, 12, 0, -3, 29, -150]
// // Output: 42
// const raqamlar = [1, -4, 12, 0, -3, 29, -150];

// const natijas = raqamlar.filter((r) => r > 0).reduce((sum, r) => sum + r, 0);

// console.log(natijas);
// // ================================================================================
// // 12. Barcha products narxlari yig'indisi topilsin. (reduce)

// const products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];
// const natija = products.reduce((acc, el) => acc + el.price, 0);
// console.log(natija);
// // ========================================================
// // Quyidagi pupils massividagi barcha o'quvchilarni
// // protcentlarining o'rtacha qiymatini toping. (reduce)
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// const jami = pupils.reduce((acc, el) => acc + el.protcent, 0);
// console.log(jami);
// // ============================================================
