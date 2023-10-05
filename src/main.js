const shorterUrlLength = 5;

const urlInput = document.getElementById("input-url");
const createBtn = document.getElementById("button-create");
const deleteBtn = document.getElementById("button-delete");
const urlList = document.getElementById("list-url");


deleteBtn.addEventListener("click", () => {
  if (urlInput.value === "") {
    urlList.innerHTML = "";
  } else {
    const items = urlList.children;
    for (let i = 0; i < items.length; i++) {
      if (items[i].innerHTML.includes(urlInput.value)) {
        items[i].remove();
        i--;
      }
    }
  }
});

createBtn.addEventListener("click", () => {
  const input = urlInput.value;
  if (isValidUrl(input)) {
    removeErrorMsg();

    const link = createLink(input);
    const span = createCountingSpan(link);

    const listItem = document.createElement("li");
    listItem.append(link, ` - ${input} - `, span);

    urlList.append(listItem);
  } else {
    addErrorMsg();
  }
});

function isValidUrl(url) {
  return /^https?:\/\/\w+\..+/i.test(url);
}

function getRandomInteger(limit) {
  return Math.floor(Math.random() * limit);
}

function getRandomString(length) {
  const possibleChars = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += possibleChars.charAt(getRandomInteger(possibleChars.length));
  }
  return result;
}

function addErrorMsg() {
  const errorParagraph = document.getElementById("error-paragraph");
  if (!errorParagraph) {
    urlList.insertAdjacentHTML("beforebegin", "<p id='error-paragraph'>Please enter a valid url</p>");
  }
}

function removeErrorMsg() {
  const errorParagraph = document.getElementById("error-paragraph");
  if (errorParagraph) {
    errorParagraph.remove();
  }
}

function createLink(href) {
  const link = document.createElement("a");
  link["target"] = "_blank";
  link["href"] = href;
  link.innerText = `localhost/${getRandomString(shorterUrlLength)}`;

  return link;
}

function createCountingSpan(link) {
  let clicks = 0;
  const span = document.createElement("span");
  span.innerText = `Clicks: ${clicks}`;

  link.addEventListener("click", () => {
    span.innerText = `Clicks: ${++clicks}`
  });

  return span;
}