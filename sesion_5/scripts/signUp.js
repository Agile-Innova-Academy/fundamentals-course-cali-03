import { usuariosURL } from "../helpers/constants.js";
import { getData } from "../helpers/getData.js";
import { postData } from "../helpers/postData.js";

const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  const nuevoUsuario = {
    id: crypto.randomUUID(),
    nombre,
    email,
    password,
  }

  const users = await getData(usuariosURL)
  const userIsRegistered = users.find(
    (user) => user.email === email
  )

  if (userIsRegistered) {
    alert("El email ingresado ya está en uso")
  } else {
    await postData(usuariosURL, nuevoUsuario)
  }
})