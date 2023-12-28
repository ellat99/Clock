let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
// Această construcție (currentTime.getSeconds() < 10 ? "0" : "") este o expresie ternară care
//adaugă un zero în fața valorii dacă aceasta este mai mică decât 10. Astfel, vei obține o reprezentare
//corectă a timpului în formatul cu două cifre, inclusiv pentru valorile mai mici de 10.
