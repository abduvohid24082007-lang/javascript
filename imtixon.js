let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function juftlar(arr) {
  return arr.reduce((acc, num) => {
    if (num % 2 == 0) {
      return acc.concat(num);
    }
    return acc;
  }, []);
}
console.log(juftlar(nums));

function jami(arr) {
  return arr.reduce((acc, num) => {
    return acc + num;
  });
}
console.log(jami(nums));

const natija = nums.map((num) => num * num);
console.log(natija);
