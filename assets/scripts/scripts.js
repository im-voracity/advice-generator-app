const newAdvice = document.querySelector(".new-advice");
const mt = document.querySelector("#mt-logo");

function getData() {
  fetch("https://api.adviceslip.com/advice").then((res) => {
    if (!res.ok) return;
    res.json().then((data) => {
      document.querySelector(
        ".advice-id"
      ).innerText = `Advice #${data.slip.id}`;
      document.querySelector(".advice").innerText = `“${data.slip.advice}”`;
    });
  });
}

getData();

newAdvice.addEventListener("click", (e) => {
  e.preventDefault();
  getData();
});

mt.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://matheustenorio.com?utm_source=advice-generator-app&utm_medium=organic&utm_campaign=frontend-mentor&utm_content=bottom-logo",
    "_blank"
  );
});
