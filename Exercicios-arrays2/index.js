function exercicio_1() {
  let alunos = ["Ana", "Bruno", "Carlos", "Diana"];

  alunos.forEach((presenca) => {
    console.log(`Presença confirmada: ${presenca}`);
  });
}
exercicio_1();

function exercicio_2() {
  let valores = [2, 4, 6, 8];

  let valoresDobro = valores.map((dobro) => dobro * 2);
  console.log(`\n${valoresDobro}\n`);
}
exercicio_2();

function exercicio_3() {
  let notas = [5, 8, 4, 9, 7];

  let notasAprovadas = notas.filter((nota) => nota >= 7);
  console.log(`${notasAprovadas}\n`);
}
exercicio_3();

function exercicio_4() {
  let velocidade = [60, 75, 82, 90, 65];
  console.log(
    `Multa gerada para a velocidade: ${velocidade.find((radar) => radar > 80)}Km/h\n`,
  );
}
exercicio_4();

function exercicio_5() {
  let salarios = [1500, 2500, 3000, 1800];
  let menorSalario = salarios.filter((menores) => menores < 2000);
  let aumento = menorSalario.map((bonus) => bonus + 500);
  console.log(
    `Valores antigos: ${salarios.filter((menores) => menores < 2000)} - Valores reajustados com bonus de R$500: ${aumento}`,
  );
}
exercicio_5();
