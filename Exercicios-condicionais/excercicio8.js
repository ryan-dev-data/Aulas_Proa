let peso = Number(prompt("Qual seu peso (Kg): "));
let altura = Number(prompt("Qual sua altura (metros): "));

imc = peso / (altura * altura);

if (imc < 18.5) {
  alert("A pessoa com IMC de " + imc.toFixed(2) + " está abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
  alert("A pessoa com IMC de " + imc.toFixed(2) + " está com peso normal.");
} else if (imc >= 25 && imc <= 29.9) {
  alert("A pessoa com IMC de " + imc.toFixed(2) + " está com sobrepeso.");
} else {
  alert("A pessoa com IMC de " + imc.toFixed(2) + " está com obesidade.");
}
