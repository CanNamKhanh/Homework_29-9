let numbers = [1, 3, 5, 7, 9, 11];
const newNumber = 12;
let arrChanged = false;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > newNumber) {
    numbers = [
      ...numbers.slice(0, i),
      newNumber,
      ...numbers.slice(i, numbers.length),
    ];
    arrChanged = true;
    break;
  }
}

if (!arrChanged) {
  numbers = [...numbers, newNumber];
}
console.log(numbers);
// console.log(numbers.slice(0));
