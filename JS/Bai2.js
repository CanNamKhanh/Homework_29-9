let password = "aaUAaa#&^%123";
let upperCount = 0;
let lowerCount = 0;
let numberCount = 0;
let specialCount = 0;
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

for (i = 0; i < password.length; i++) {
  if (password[i] >= "A" && password[i] <= "Z") {
    upperCount++;
  }
  if (password[i] >= "a" && password[i] <= "z") {
    lowerCount++;
  }
  if (password[i] >= 0 && password[i] <= 9) {
    numberCount++;
  }
  for (let j = 0; j < specialChar.length; j++) {
    if (password[i] == specialChar[j]) {
      specialCount++;
    }
  }
}

if (
  password.length >= 8 &&
  upperCount >= 2 &&
  lowerCount >= 2 &&
  numberCount >= 1 &&
  specialCount >= 1
) {
  console.log("Mật khẩu mạnh!");
} else {
  console.log("Mật khẩu yếu!");
}

// console.log(upperCount);
// console.log(lowerCount);
// console.log(numberCount);
// console.log(specialCount);
