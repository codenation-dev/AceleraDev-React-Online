const calculadora = require("./calc");
const prompt = require("prompt-sync")();

function options() {
  console.log(`
  1 - somar
  2 - subtrair
  3 - multiplicar
  4 - dividir
  0 - sair
  `);
}

function optionSelected(opcao) {
  const num1 = Number(prompt("Digite numero 1: "));
  const num2 = Number(prompt("Digite numero 2: "));

  if (opcao == "1") {
    return calculadora.soma(num1, num2);
  }

  if (opcao == "2") {
    return calculadora.subtracao(num1, num2);
  }
}

let opcao;
while (opcao != "0") {
  options();
  opcao = prompt("Qual a opção? ");
  const resultado = optionSelected(opcao);

  console.log(`O resultado é ${resultado}`);
}
