let content =
  "F8 123 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam at etsaepe sapiente sit adipisci fuga vitae, consequatur provident porroratione expedita aperiam quam dolores cum pariatur mollitia quo. Quo! F8123 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam at etsaepe sapiente sit adipisci fuga vitae, consequatur provident porroratione expedita aperiam quam dolores cum pariatur mollitia quo. Quo! F8123 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam at etsaepe sapiente sit adipisci fuga vitae, consequatur provident porroratione expedita aperiam quam dolores cum pariatur mollitia quo. Quo! F8123 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam at etsaepe sapiente sit adipisci fuga vitae, consequatur provident porroratione expedita aperiam quam dolores cum pariatur mollitia quo. Quo!";
const keyword = "Lorem";
let highlighted;
let count = 0;
let findIndex = content.indexOf(keyword);
console.log(findIndex);

while (findIndex !== -1) {
  count++;
  findIndex = content.indexOf(keyword, findIndex + keyword.length);
  highlighted = `<span style="background-color: yellow"> ${keyword} </span> `;
}

document.body.innerHTML = `Tìm kiếm với từ khóa <strong>${keyword}</strong> <br><br> ${content.replaceAll(
  keyword,
  highlighted
)} <br><br> Đã tìm thấy <strong>${count}</strong> kết quả với từ khóa <strong>${keyword}</strong>`;
