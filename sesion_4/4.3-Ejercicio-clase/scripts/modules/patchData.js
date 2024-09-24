export const patchData = async (url, id, obj) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    }).then(
      (response) =>
        response &&
        response.status === 200 &&
        alert("Heroe modificado de forma exitosa")
    );
  } catch (error) {
    console.log(error);
  }
};
