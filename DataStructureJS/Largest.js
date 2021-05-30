let randomNumber = [];
for (let a = 0; a < 10; a++) {
  randomNumber[a] = Math.floor(100 + Math.random() * 900);
  console.log(randomNumber[a]);
}
const maxNumber = Math.max(...randomNumber);
const minNumber = Math.min(...randomNumber);

const maxFiltered = randomNumber.filter((number) => number < maxNumber);
const minFiltered = randomNumber.filter((number) => number > minNumber);

const secondMax = Math.max(...maxFiltered);
const secondMin = Math.min(...minFiltered);

console.log(
  "second maximum = " + secondMax + " and second min = " + secondMin
 )