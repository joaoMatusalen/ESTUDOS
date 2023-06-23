const button = document.getElementById("register-button");
const buttonRemove = document.getElementById("remove-event-button");

button.addEventListener("click", register);
buttonRemove.addEventListener("click", remove);

function register(ev) {
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuario confimardo " + username);
  } else {
    alert("Senhas não concidem!!");
  }
}

function remove() {
  button.removeEventListener("click", register);
  alert("Evento removido.");
}
