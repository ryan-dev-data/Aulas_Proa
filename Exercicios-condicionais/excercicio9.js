let ano_bissexto = Number(prompt("Digite o ano: "));

if (
  (ano_bissexto % 4 === 0 && ano_bissexto % 100 !== 0) ||
  ano_bissexto % 400 === 0
) {
  alert("O ano de " + ano_bissexto + " é bissexto.");
} else {
  alert("O ano de " + ano_bissexto + " não é bissexto.");
}
