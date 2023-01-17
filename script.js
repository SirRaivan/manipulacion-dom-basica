const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular')
const pResult = document.querySelector('.result')

btnCalcular.addEventListener ('click', sumarInputValues); // para mandar a llamar una funcion y escuchar eventos desde js

function sumarInputValues () {
        const sumaInputs = Number(input1.value) + Number(input2.value);
        pResult.innerText = 'Resultado: ' + sumaInputs;
    }

// form.addEventListener ('click', sumarInputValues);

// function sumarInputValues (event) {
//     event.preventDefault();
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = 'Resultado: ' + sumaInputs;
// }