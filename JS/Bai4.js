document.body.innerHTML = "<h1>Tìm phần tử lớn thứ 2 trong mảng cho sẵn</h1>";

const numbers = [5, 2, 1, 9, 8, 0];
console.log("Cho mảng", numbers);

let maxNumber = 0;
let result = 0;
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
  if (numbers[i] > result && numbers[i] < maxNumber) {
    result = numbers[i];
  }
}

console.log("Số lớn thứ 2 là:", result);
