import { url_heroes } from "./constants.js";
import { deleteData } from "./deleteData.js";
import { patchData } from "./patchData.js";

export const showCard = (containers, datos) => {
  containers.innerHTML = "";

  datos.forEach((element) => {
    const divHeroe = document.createElement("div");

    divHeroe.innerHTML = `
        <div class="card" style="width: 13rem;">
                 <img src=${element.image} class="card-img-top" alt="..." style="width: 100%">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <button type="button" id=${element.id} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${element.id}">
                     Ver más
                </button>
                <button type="button" id=${element.id}  class="btn btn-primary btnEdit">Editar</button>

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
                    <div class="modal-body">
                        <img src=${element.image} class="card-img-top" alt="..." style="width: 100%">
                        <h5 class="card-title">Super Heroe: ${element.superhero}</h5>
                        <h5 class="card-title">Publicado po: ${element.publisher}</h5>
                        <h5 class="card-title">Nombre Real: ${element.alter_ego}</h5>
                        <h5 class="card-title">Primera aparición en: ${element.first_appearance}</h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id=${element.id}  class="btn btn-danger btnDelete" data-bs-dismiss="modal">Eliminar</button>
                    </div>
                    </div>
                </div>
                </div>
                        `;

    const btnDelete = divHeroe.querySelector(".btnDelete");
    btnDelete.addEventListener("click", (e) => {
      console.log(e.target.id);
      deleteData(url_heroes, e.target.id);
    });

        const btnEdit = divHeroe.querySelector(".btnEdit");
        btnEdit.addEventListener("click", (e) => {
          console.log(e.target.id, element);

          // asignarle a lops input del formulario los valores de element

          // capturo la informacion con el submit

        //   patchData("url, id, obj")
        
        });
    containers.appendChild(divHeroe);
  });
};
