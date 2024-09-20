const url = "https://fakestoreapi.com/products";
const containerProduct = document.getElementById("containers");
const categoriesSelect = document.getElementById("categoriesSelect");

document.addEventListener("DOMContentLoaded", async function () {
  const datos = await getData();
  console.log(datos);

  //-------Cargar las category--------------//
  let options = "";
  datos.forEach((element) => {
    options += `<option value="${element.category}">${element.category}</option>`;
  });
  //-------Mostrar las category--------------//
  categoriesSelect.innerHTML = options;

  //-------Buscar las category--------------//

  categoriesSelect.addEventListener("click", (e) => {
    console.log(e.target.value);
    let html = "";
    const filtroCategory = datos.filter(
      (prod) => prod.category === e.target.value
    );
    console.log(filtroCategory);

    filtroCategory.forEach((element) => {
      const { category, description, image, price, title } = element;

      html += ` 
   <div id="cardP">
    <p>${category}</p>
    <img src="${image}" alt="" id="cardImg">
    <h3>${title}</h3>
    <p>${description}</p>
    <span>${price}</span>      
   </div>`;
      containerProduct.innerHTML = html;
    });
  });

  //   //-------Listar todos los productos--------------//
    let html = "";
    datos.forEach((element) => {
      const { category, description, image, price, title } = element;

      html += `
     <div id="cardP">
      <p>${category}</p>
      <img src="${image}" alt="" id="cardImg">
      <h3>${title}</h3>
      <p>${description}</p>
      <span>${price}</span>
     </div>`;
      containerProduct.innerHTML = html;
    });
});

async function getData() {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}


