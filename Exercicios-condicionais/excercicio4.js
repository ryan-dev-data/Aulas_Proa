let cod_lanche = Number(prompt("Qual lanche deseja? "));

switch (cod_lanche) {
  case 1:
    alert("Você escolheu Pizza. Valor: R$ 40,00");
    break;
  case 2:
    alert("Você escolheu Hamburguer. Valor: R$ 35,00");
    break;
  case 3:
    alert("Você escolheu Pastel. Valor: R$ 20,00");
    break;
  case 4:
    alert("Você escolheu Coxinha. Valor: R$ 10,00");
    break;
  case 5:
    alert("Você escolheu Beirute. Valor: R$ 38,00");
    break;
  case 6:
    alert("Você escolheu Batata frita. Valor: R$ 25,00");
    break;
  case 7:
    alert("Você escolheu Onion rings. Valor: R$ 25,00");
    break;
  default:
    alert("Essa opção não está no cardapio.");
    break;
}
