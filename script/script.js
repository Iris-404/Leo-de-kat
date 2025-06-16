console.log("Hello");
const knop1 = document.getElementById("voer");
const knop2 = document.getElementById("water"); /* Haalt element uit de DOM*/
const knop3 = document.getElementById("spelen");
const tekst = document.getElementById("status");
const afbeelding = document.getElementById("Leo");
const healthbar = document.getElementById("healthbar");

/* Geleerd over health bar: https://www.youtube.com/watch?v=UI-Qa2-tY10  */
/* Geleerd over countdown Timer (if else statement): https://www.youtube.com/watch?v=js8YiWjrOrw&t=818s */

let health = 100; /*Let variable, want de health veranders*/
const leven = setInterval(() => { /* Interval aanzetten van timer*/
  health -= 10;
  healthbar.value = health; /* laat toe en afname zien healtbar*/
  if (health >= 0) {
  } else {
    health = 0;
    tekst.textContent = "Leo is overleden...";
    afbeelding.src = "./img/leo-dood.png";
    clearInterval(leven); /* Interval uitzetten van timer*/
  }
}, 1000); /* 1000 ms = 1 seconde over -10 health*/

/* liep vast dus vroeg aan ChatGTP over hoe een stijging werkt */
function stijging(amount) {
  if (health <= 0) return;
  health += amount;
  if (health > 100) health = 100;
  healthbar.value = health;
}

knop1.addEventListener("click", function () { /* Voert functie uit als op de knop gedrukt wordt */
  tekst.textContent = "Leo zit helemaal vol!"; /* Veranderd de p-tekst*/
  afbeelding.src = "./img/leo-eten.png"; /* Veranderd de afbeelding */
  stijging(15); /* Verhoogt de healtbar, code van ChatGTP*/
  document.getElementById("voer").disabled = true;
});

knop2.addEventListener("click", function () {
  tekst.textContent = "Leo heeft geen dorst meer!";
  afbeelding.src = "./img/leo-drinken.png";
  stijging(10);
  document.getElementById("water").disabled = true;
});

knop3.addEventListener("click", function () {
  tekst.textContent = "Leo is blij aan het spelen!";
  afbeelding.src = "./img/leo-spelen.png";
  stijging(15);
  document.getElementById("spelen").disabled = true;
});