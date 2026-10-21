let ladoA = Number(prompt("Digite a primeira medida: "));
let ladoB = Number(prompt("Digite a segunda medida: "));
let ladoC = Number(prompt("Digite a terceira medida: "));

if (ladoA == ladoB && ladoB == ladoC) {
  alert(
    "As medidas " +
      ladoA +
      "+" +
      ladoB +
      "+" +
      ladoC +
      " formam um Triângulo Equilátero.",
  );
} else if (
  (ladoA == ladoB && ladoB != ladoC) ||
  (ladoA == ladoC && ladoC != ladoB) ||
  (ladoB == ladoC && ladoC != ladoA)
) {
  alert(
    "As medidas " +
      ladoA +
      "+" +
      ladoB +
      "+" +
      ladoC +
      " formam um Triângulo Isósceles.",
  );
} else {
  alert(
    "As medidas " +
      ladoA +
      "+" +
      ladoB +
      "+" +
      ladoC +
      " formam um Triângulo Escaleno.",
  );
}
