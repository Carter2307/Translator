const form = document.querySelector("form");
const outpout = document.querySelector(".generated-text-output");

async function onsubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const url = "/";

  const options = {
    method: "POST",
    body: formData,
  };

  let res = await window.fetch(url, options);
  let data = await res.json();
  outpout.innerHTML = `[:sk]${data.sk.text}<br>[:de]${data.de.text}<br>[:nl]${data.nl.text}[:]`;
}

form.addEventListener("submit", onsubmit);
