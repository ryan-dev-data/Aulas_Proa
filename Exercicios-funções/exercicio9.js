function gerarBoletim(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  if (media >= 7) {
    return "Aluno Aprovado";
  } else if (media >= 5 && media <= 6.9) {
    return "Aluno em Recuperação";
  } else {
    return "Aluno Reprovado";
  }
}

console.log(gerarBoletim(8, 7, 9));
