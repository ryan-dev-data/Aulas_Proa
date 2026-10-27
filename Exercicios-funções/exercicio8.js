function calcularDescontar(preco, desconto) {
  let promocao = preco * (desconto / 100);
  let preco_final = preco - promocao;
  return preco_final;
}

console.log(
  `Valor com o desconto fica: R$${Number(calcularDescontar(100, 20)).toFixed(2)}`,
);
