function calculoTotal(inputPrecio, inputTasa, inputYear) {

    const yearCount = inputYear * 12

    const interes = ((inputPrecio * yearCount) * (inputTasa / 100));

    const calculoNuevo = (interes / 12);

    const calculoNuevo2 = (calculoNuevo / inputYear)

    return calculoNuevo2;



}

function calcular() {

    const inputPrecio = document.getElementById("precio");

    const precioValue = Number(inputPrecio.value);

    const inputTasa = document.getElementById("tasa")

    const tasaValue = Number(inputTasa.value);

    const inputYear = document.getElementById("year")

    const yearValue = Number(inputYear.value);

    const calculoNuevo2 = calculoTotal(precioValue, tasaValue, yearValue)

    const resultPrice = document.getElementById("resultPrice");

    resultPrice.innerText = "valor de la cuota es : " + calculoNuevo2;

    console.log(precioValue, tasaValue, yearValue)


}