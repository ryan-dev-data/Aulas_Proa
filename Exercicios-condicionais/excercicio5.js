let idade_para_voto = Number(prompt("Digite uma idade: "));

if (idade_para_voto < 16) {
  alert("A pessoa com " + idade_para_voto + " anos não pode votar.");
} else if (
  (idade_para_voto >= 16 && idade_para_voto <= 17) ||
  idade_para_voto > 70
) {
  alert("A pessoa com " + idade_para_voto + " anos vota opcionalmente.");
} else if (idade_para_voto >= 18 && idade_para_voto <= 70) {
  alert("A pessoa com " + idade_para_voto + " anos é voto obrigatório.");
}
