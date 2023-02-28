const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const informacion = document.getElementById("informacion");

boton1.addEventListener("click", () => {
  Email.textContent = "ricardo.fowler@example.com";
});

boton2.addEventListener("click", () => {
  Phone.textContent = "(918) 253-5393";
});

boton3.addEventListener("click", () => {
  Address.textContent = "5983 E Pecan St";
});
