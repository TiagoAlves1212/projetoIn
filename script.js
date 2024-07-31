// [JS-A02] Escreva um programa em JavaScript que solicite ao usuário o nome, altura em centímetros e peso de uma pessoa. O programa deve calcular o índice de massa corporal (IMC) dessa pessoa, considerando a fórmula IMC = peso / (altura * altura), onde a altura deve ser convertida de centímetros para metros. Em seguida, o programa deve classificar o peso com base no IMC calculado, de acordo com a tabela a seguir:

// Menor que 16: Baixo peso muito grave
// De 16 a 16.99: Baixo peso grave
// De 17 a 18.49: Baixo peso
// De 18.50 a 24.99: Peso normal
// De 25 a 29.99: Sobrepeso
// De 30 a 34.99: Obesidade grau I
// De 35 a 39.99: Obesidade grau II
// Maior ou igual a 40: Obesidade grau III
// O programa deve exibir o nome da pessoa, o índice de massa corporal calculado e a classificação correspondente.

const box = document.querySelector('.box')
const inputNome = document.querySelector('#input-nome')
const inputPeso = document.querySelector('#input-peso')
const inputAltura = document.querySelector('#input-altura')
const btnEnviar = document.querySelector('#btn-enviar')
const container = document.querySelector('.imc')



btnEnviar.addEventListener('click', () => {

    let peso = parseFloat(inputPeso.value)
    let altura = parseFloat(inputAltura.value)
    let p = document.createElement('p')
    p.innerText = `Nome: ${inputNome.value}\n Peso: ${inputPeso.value}\n Altura: ${inputAltura.value}\n IMC: ${peso / (altura * altura).toFixed(0)}`
    container.appendChild(p)
})