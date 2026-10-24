// Modo com listas
let semana = [
  null,
  "Domingo - Final de semana",
  "Segunda - Dia útil",
  "Terça - Dia útil",
  "Quarta - Dia útil",
  "Quinta - Dia útil",
  "Sexta - Dia útil",
  "Sabádo - Final de semana",
];

for (let i = 1; i < semana.length; i++) {
  console.log(semana[i]);
}
// Modo sem listas
for (let i = 1; i <= 7; i++) {
  if (i == 1 || i == 7) {
    console.log("Final de semana.");
  } else {
    console.log("Dia útil.");
  }
}
