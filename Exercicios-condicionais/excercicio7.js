let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let operador = prompt("Digite o operador (+, -, /): ");

switch (operador) {
  case "+":
    tot_soma = num1 + num2;
    alert("A soma de " + num1 + "+" + num2 + " é = " + tot_soma);
    break;
  case "-":
    tot_sub = num1 - num2;
    alert("A subtração de " + num1 + "-" + num2 + " é = " + tot_sub);
    break;
  case "/":
    if (num2 == 0) {
      alert("Impossivel dividir por 0! Digite outro número.");
      num2 = Number(prompt("Digite o segundo número: "));
      tot_div = num1 / num2;
      alert("A Divisão de " + num1 + "/" + num2 + " é = " + tot_div);
    } else {
      tot_div = num1 / num2;
      alert("A Divisão de " + num1 + "/" + num2 + " é = " + tot_div);
      break;
    }
  default:
    alert("Operador inválido.");
    break;
}
