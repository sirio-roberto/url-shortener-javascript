const urlInput = document.getElementById("input-url");
const createBtn = document.getElementById("button-create");
const urlList = document.getElementById("list-url");

createBtn.addEventListener("click", () => {
  const input = urlInput.value;
  urlList.insertAdjacentHTML("beforeend", `<li><a href='${input}'>localhost/ab5dr</a> - ${input}</li>`);
});