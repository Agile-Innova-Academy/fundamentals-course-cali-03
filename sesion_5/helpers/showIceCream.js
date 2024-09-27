import { paletasURL } from "./constants.js";
import { patchData } from "./patchData.js";

export const showIceCream = (containers, datos) => {
  containers.innerHTML = "";

  datos.forEach((element) => {
    const divPaleta = document.createElement("div");

    divPaleta.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src=${element.image} class="card-img-top" style="height: 300px; width: max-content" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <a id=${element.id} class="btn btn-primary btn-favorites">Añadir a favoritos</a>
          <a id=${element.id} class="btn btn-primary btn-edit" data-bs-toggle="modal" data-bs-target="#exampleModal${element.id}">Editar</a>
        </div>
      </div>
        
        
         <!-- Button trigger modal -->
                <!-- Modal -->
                <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${element.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                      <div class="modal-body d-flex">
                        <img src=${element.image} class="card-img-top" alt="..." style="height: 150px; width: max-content">
                        <div>
                          <form class="updateIceCreams">
                            <label for="editName${element.id}">Nombre</label>
                            <input type="text" id="editName${element.id}" />
                            <label for="editPrice${element.id}">Precio</label>
                            <input type="text" id="editPrice${element.id}" />
                              <label for="editImage${element.id}">Image</label>
                            <input type="text" id="editImage${element.id}" />
                              <label for="editFlavor${element.id}">Sabor</label>
                            <input type="text" id="editFlavor${element.id}" />
                              <label for="editDescription${element.id}">Descripción</label>
                            <textarea type="text" id="editDescription${element.id}"></textarea>
                              <label for="editCategory${element.id}">Categoría</label>
                            <input type="text" id="editCategory${element.id}" />
                            <button id=${element.id} type="submit" class="btn btn-primary btn-Update">Actualizar</button>
                          </form>
                        </div>
                      </div>
                    <div class="modal-footer">
                        <button type="button" id=${element.id}  class="btn btn-danger btnDelete" data-bs-dismiss="modal">Eliminar</button>
                    </div>
                    </div>
                </div>
                </div>
    `;

    // Funcionalidad Añadir a favoritos
    const btnFavorites = divPaleta.querySelector(".btn-favorites");
    btnFavorites.addEventListener("click", (e) => {
      console.log(e.target.id);
    });

    // Funcionalidad Eliminar
    const btnDelete = divPaleta.querySelector(".btnDelete");
    btnDelete.addEventListener("click", (e) => {
      console.log(e.target.id);
      deleteData(paletasURL, e.target.id);
    });

    // Funcionalidad Editar
    const btnEdit = divPaleta.querySelector(".btn-edit");
    btnEdit.addEventListener("click", ({ target }) => {
      console.log(target);
      const iceCreamToEdit = datos.find((paleta) => paleta.id == target.id)
      console.log(iceCreamToEdit)

      // asignarle a lops input del formulario los valores de element
      document.getElementById(`editName${target.id}`).value = iceCreamToEdit.name
      document.getElementById(`editPrice${target.id}`).value = iceCreamToEdit.price
      document.getElementById(`editImage${target.id}`).value = iceCreamToEdit.image
      document.getElementById(`editFlavor${target.id}`).value = iceCreamToEdit.flavor
      document.getElementById(`editDescription${target.id}`).value = iceCreamToEdit.description
      document.getElementById(`editCategory${target.id}`).value = iceCreamToEdit.categorie

      // capturo la informacion con el submit
      // const btnPatch = divPaleta.querySelector(".btn-Update");
      // btnPatch.addEventListener("click", ({target}) => {
      //   const newValues = {
      //     name: document.getElementById(`editName${target.id}`).value,
      //     price: document.getElementById(`editPrice${target.id}`).value,
      //     image: document.getElementById(`editImage${target.id}`).value,
      //     flavor: document.getElementById(`editFlavor${target.id}`).value,
      //     description: document.getElementById(`editDescription${target.id}`).value,
      //     categorie: document.getElementById(`editCategory${target.id}`).value,
      //   }
      //   console.log(newValues)
      // });



      const formUpdate = divPaleta.querySelector(".updateIceCreams");
      formUpdate.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("Updating")
        const newValues = {
          name: document.getElementById(`editName${target.id}`).value,
          price: document.getElementById(`editPrice${target.id}`).value,
          image: document.getElementById(`editImage${target.id}`).value,
          flavor: document.getElementById(`editFlavor${target.id}`).value,
          description: document.getElementById(`editDescription${target.id}`).value,
          categorie: document.getElementById(`editCategory${target.id}`).value,
        }
        await patchData(paletasURL, target.id, newValues)
      });
      //   patchData("url, id, obj")

    });
    containers.appendChild(divPaleta);
  });
};
