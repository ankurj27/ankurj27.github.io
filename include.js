async function loadHTML(selector, file) {
  const element = document.querySelector(selector);
  const response = await fetch(file);
  const data = await response.text();
  element.innerHTML = data;
}
