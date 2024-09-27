export const patchData = async (url, id, obj) => {
  await axios.patch(`${url}/${id}`, obj)
  .then(
    (response) => {
      if (response && response.status === 200) {
        if (url === "http://localhost:3002/paletas") {
          alert("Paleta actualizada exitosamente");
        } else {
          alert("Usuario actualizado exitosamente");
        }
      }
    }
  )
  .catch(err => console.error(err))
};
