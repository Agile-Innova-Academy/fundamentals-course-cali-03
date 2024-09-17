//-----------Agregar un producto------------------//
const form = document.getElementById("formulario");
const arrayproductos = JSON.parse(localStorage.getItem("producto")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nomPro").value;
  const precio = document.getElementById("precio").value;
  const imagen = document.getElementById("imagen").value;
  const talla = document.getElementById("talla").value;


  let objProducto = {
    nombre, imagen, talla, precio
  }

  console.log(objProducto)
  arrayproductos.push(objProducto)

  localStorage.setItem("producto", JSON.stringify(arrayproductos))
});

//-------------Mostrar el arreglo-------------------//

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("containerProductos");
  
    arrayproductos.forEach(element => {
        const { nombre, imagen, talla, precio } = element;
        
        let divProduct = document.createElement("div");
        divProduct.className = "divProduct";

        divProduct.innerHTML = `
        <img src=${imagen}/>
        <h3>${nombre}</h3>
        <p>${precio} $ / Talla: ${talla}</p>
        `
       container.appendChild(divProduct) 
    
  });


})