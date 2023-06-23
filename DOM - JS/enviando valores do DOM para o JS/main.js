function register(elemento) {
  username = elemento.children.username.value;
  password = elemento.children.password.value;
  passwordConfirmation = elemento.children.passwordConfirmation.value;

  if (password == passwordConfirmation) {
    alert("Usuario cadastrado " + username);
  } else {
    alert("Senhas não conferem!");
  }
}
