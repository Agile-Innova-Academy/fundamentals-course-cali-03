import { paletasURL } from "../helpers/constants.js";
import { getData } from "../helpers/getData.js";
import { showIceCream } from "../helpers/showIceCream.js";

const container = document.getElementById('cardContainer');

document.addEventListener('DOMContentLoaded', async () => {
  const paletas = await getData(paletasURL);

  showIceCream(container, paletas);
})