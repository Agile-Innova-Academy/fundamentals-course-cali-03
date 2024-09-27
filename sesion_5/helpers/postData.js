export const postData = async (url, obj) => {
  await axios.post(url, obj)
    .then(
      (response) => {
        if (response && response.status === 201) {
          if (url === "http://localhost:3002/paletas") {
            alert("Paleta creada exitosamente");
          } else {
            alert("Usuario creado exitosamente");
          }
        }
      }
    )
    .catch(err => console.error(err))
};
