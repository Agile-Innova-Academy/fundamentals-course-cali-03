import { usuariosURL } from "../helpers/constants.js";
import { getData } from "../helpers/getData.js";

const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  const users = await getData(usuariosURL)
  console.log(users)
  const userExists = users.find(
    (user) => user.email === email && user.password === password
  )

  if (userExists) {
    sessionStorage.setItem('currentUser', JSON.stringify(userExists))
    window.location.href = './pages/home.html'
  } else {
    alert("Usuario o contraseña incorrectos")
  }
})