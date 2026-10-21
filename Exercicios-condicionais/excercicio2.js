let idade = Number(prompt("Digite a idade: "));

if (idade < 12) {
  alert("A pessoa com " + idade + " anos é criança.");
} else if (idade >= 13 && idade <= 17) {
  alert("A pessoa com " + idade + " anos é adolescente.");
} else if (idade >= 18 && idade <= 59) {
  alert("A pessoa com " + idade + " anos é adulto.");
} else {
  alert("A pessoa com " + idade + " anos é idoso.");
}
