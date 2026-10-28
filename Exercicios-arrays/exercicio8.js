let notas = [5, 8, 4, 9, 7];

let quantidadeAprovados = 0;

for (let n = 0; n < notas.length; n++) {
  if (notas[n] >= 7) {
    quantidadeAprovados += 1;
  }
}
console.log(`Total de aprovados: ${quantidadeAprovados}`);
