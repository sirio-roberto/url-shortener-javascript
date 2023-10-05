const urlInput = document.getElementById("input-url");
const createBtn = document.getElementById("button-create");
const urlList = document.getElementById("list-url");

createBtn.addEventListener("click", () => {
  const input = urlInput.value;
  if (isValidUrl(input)) {
    urlList.insertAdjacentHTML("beforeend", `<li><a href='${input}'>localhost/ab5dr</a> - ${input}</li>`);
  } else {
    urlList.insertAdjacentHTML("beforebegin", "<p>Please enter a valid url</p>");
  }
});

function isValidUrl(url) {
  return /^https?:\/\/\w+\..+/i.test(url);
}