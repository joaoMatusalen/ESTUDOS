const form = document.getElementById("orderForm");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const address = document.querySelector("input[name='address']").value;
  const breadType = document.querySelector("select[name='breadType']").value;
  const main = document.querySelector("input[name='main']").value;
  observations = document.querySelector("textarea[name='observations']");
  let salad = "";

  document
    .querySelectorAll("input[name='salad']:checked")
    .forEach(function (item) {
      salad += item.value;
    });

  alert(name, address, breadType, main, salad, observations);
});
