const shorterUrlLength = 5;

const urlInput = document.getElementById("input-url");
const createBtn = document.getElementById("button-create");
const urlList = document.getElementById("list-url");

createBtn.addEventListener("click", () => {
  const input = urlInput.value;
  if (isValidUrl(input)) {
    let clicks = 0;

    const span = document.createElement("span");
    span.innerText = `Clicks: ${clicks}`;

    const link = document.createElement("a");
    link["target"] = "_blank";
    link["href"] = input;
    link.innerText = `localhost/${getRandomString(shorterUrlLength)}`;

    const listItem = document.createElement("li");
    listItem.innerHTML = `${link.outerHTML} - ${input} - ${span.outerHTML}`;

    listItem.addEventListener("click", (e) => {
      span.innerText = `Clicks: ${++clicks}`
      listItem.innerHTML = `${link.outerHTML} - ${input} - ${span.outerHTML}`;
    });

    urlList.append(listItem);
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