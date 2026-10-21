let salario = Number(prompt("Qual o salário: "));
let imposto = 0;
if (salario > 2000 && salario <= 4000) {
  imposto = (salario - 2000) * 0.1;
  alert(
    "Seu salário é de R$" +
      salario.toFixed(2) +
      ". Imposto na faixa de 10%. Valor devido: R$" +
      imposto.toFixed(2),
  );
} else if (salario > 4000) {
  imposto = (salario - 4000) * 0.2 + 200;
  alert(
    "Seu salário é de R$" +
      salario.toFixed(2) +
      ". Imposto na faixa de 20%. Valor devido: R$" +
      imposto.toFixed(2),
  );
} else {
  alert("Seu salário é de R$" + salario.toFixed(2) + ". Isento de imposto.");
}
