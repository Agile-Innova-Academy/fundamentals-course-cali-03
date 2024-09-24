import { url_heroes } from "./modules/constants.js";
import { getData } from "./modules/getData.js";
import { postData } from "./modules/postData.js";
import { showCard } from "./modules/showCard.js";

const heroesForm = document.getElementById("heroesForm");
const listHeroes = document.getElementById("listHeroes");

document.addEventListener("DOMContentLoaded", async function () {
  const resp = await getData(url_heroes);  
  showCard(listHeroes, resp);
});

heroesForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let objHeroe = {
    id: crypto.randomUUID(),
    name: document.getElementById("comicName").value,
    superhero: document.getElementById("heroName").value,
    publisher: document.getElementById("publisher").value,
    alter_ego: document.getElementById("alter_ego").value,
    first_appearance: document.getElementById("first_appearance").value,
    image: document.getElementById("image").value,
  };

  postData(url_heroes, objHeroe);
});
