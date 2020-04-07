//Condicionais
if (true) {
  console.log("Bem vindo");
}

const number = 42;
if (number == "42") {
  console.log("Primeira comparação: É igual a 42");
} else {
  console.log("Primeira comparação:Não é igual a 42");
}

if (number === "42") {
  console.log("Segunda comparação: É igual a 42");
} else {
  console.log("Segunda comparação: Não é igual a 42");
}

let newNumber = number === 42 ? 43 : 41;
console.log(`Novo número é ${newNumber}`);

//Loops
for (let index = 0; index < 5; index++) {
  console.log(`${index} - posição`);
}

let count = 1;

while (count < 5) {
  console.log(`Número ${count}`);
  count++;
}
