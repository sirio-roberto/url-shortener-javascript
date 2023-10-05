const shorterUrlLength = 5;

const urlInput = document.getElementById("input-url");
const createBtn = document.getElementById("button-create");
const urlList = document.getElementById("list-url");

createBtn.addEventListener("click", () => {
  const input = urlInput.value;
  if (isValidUrl(input)) {
    urlList.insertAdjacentHTML("beforeend",
      `<li><a target="_blank" href='${input}'>localhost/${getRandomString(shorterUrlLength)}</a> - ${input}</li>`);
  } else {
    urlList.insertAdjacentHTML("beforebegin", "<p>Please enter a valid url</p>");
  }
});

function isValidUrl(url) {
  return /^https?:\/\/\w+\..+/i.test(url);
}

function getRandomInteger(limit) {
  return Math.floor(Math.random() * limit);
}

function getRandomString(length) {
  const possibleChars = "abcdefghijklmnopqrstuwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += possibleChars.charAt(getRandomInteger(possibleChars.length));
  }
  return result;
}