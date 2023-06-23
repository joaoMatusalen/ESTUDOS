function escalarJogador() {
  const pocicao = document.getElementById("pocicao").value;
  const name = document.getElementById("name").value;
  const camisa = document.getElementById("camisa").value;

  if (pocicao == "" || name == "" || camisa == "") {
    alert("Prencha os campos corretamente!!");
    return;
  }

  let confirmation = confirm("Você deseja escalar esse jogador?");

  if (confirmation == false) {
    alert("Cancelando....");
    document.getElementById("pocicao").value = "";
    document.getElementById("name").value = "";
    document.getElementById("camisa").value = "";
    return;
  }

  let formatText = pocicao + " / " + name + " / Camisa:" + camisa;

  const listJogadores = document.getElementById("lista-jogadores");
  const playerItem = document.createElement("li");
  playerItem.id = "player-" + camisa;
  playerItem.textContent = formatText;
  listJogadores.appendChild(playerItem);

  document.getElementById("pocicao").value = "";
  document.getElementById("name").value = "";
  document.getElementById("camisa").value = "";
}

function removerJogador() {
  const remove = document.getElementById("remove").value;
  const playerItemId = document.getElementById("player-" + remove);

  if (remove == "") {
    alert("Prencha os campos corretamente!!");
    return;
  } else if (playerItemId == null) {
    alert("Não existem jogadores com essa camisa.");
    document.getElementById("remove").value = "";
    return;
  }

  let confirmation = confirm("Você deseja remover esse jogador?");
  if (confirmation == false) {
    alert("Cancelando...");
    document.getElementById("remove").value = "";
    return;
  }
  alert("Excluindo jogador da escalação.");
  document.getElementById("lista-jogadores").removeChild(playerItemId);
  document.getElementById("remove").value = "";
}
