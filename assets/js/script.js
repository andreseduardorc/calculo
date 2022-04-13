function calculoTotal(precio, tasa, year) {

    const interes = inputPrecio * inputTasa;

    const calculoNuevo = interes * inputYear

    return calculoNuevo;



}

function calcular() {

    const inputPrecio = document.getElementById("precio");
    const precioValue = inputPrecio.Value;

    const inputTasa = document.getElementById("tasa")

    const tasaValue = inputTasa.Value;

    const inputYear = document.getElementById("year")

    const yearValue = inputYear.Value;

    const calculoNuevo = (precioValue, tasaValue, yearValue)

    const resultPrice = document.getElementById("resultPrice");

    resultPrice.innerText = "calculo es " + calculoNuevo;



}