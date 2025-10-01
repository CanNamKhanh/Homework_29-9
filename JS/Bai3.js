let users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
for (i = 0; i < users.length; i++) {
  for (j = i + 1; j < users.length; j++) {
    if (users[i] === users[j]) {
      console.log("Phần tử bị lặp là:", users[i]);
      delete users[j];
    }
  }
}

console.log(users);
document.body.innerHTML = "<h1>Tìm và xóa phần tử lặp</h1>";
