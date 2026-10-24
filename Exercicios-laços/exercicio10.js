let saque = Number(130);

while (saque >= 0) {
  if (saque >= 50) {
    saque -= 50;
    console.log("Nota de R$50,00 entregue.");
  } else if (saque >= 20) {
    saque -= 20;
    console.log("Nota de R$20,00 entregue.");
  } else if (saque >= 10) {
    saque -= 10;
    console.log("Nota de R$10,00 entregue.");
  } else {
    console.log("Conta Zerada!");
    break;
  }
}
