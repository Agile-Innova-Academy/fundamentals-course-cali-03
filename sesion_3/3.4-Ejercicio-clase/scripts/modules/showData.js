const main = document.getElementById("main");

export const showData = (datos) => {
  console.log(datos);
  const { name, order, id, weight, base_experience, sprites, types } = datos;

  const cardPokemon = document.createElement("div");
  cardPokemon.classList.add("cardPokemon");

  cardPokemon.innerHTML = `
 <img src="${sprites.front_default}" alt=""/>
 <div class="pokeInfo">
 <h2>${name}</h2>
 <span class="base"> ${base_experience}</span>
 
 </div>
 <div class="overview">
 <h3>${types[1].type.name}</h3>
 
 </div>
 `;
  main.appendChild(cardPokemon);
};
