export const postData = async (url, obj) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    }).then(
      (response) =>
        response &&
        response.status === 201 &&
        alert("Heroe creado exitosamente")
    );
  } catch (error) {
    alert(error.message);
  }
};
