let num = Number(1);

while (true) {
  if (num % 5 === 0 && num % 7 === 0) {
    console.log(`O primeiro múltiplo comum é: ${num}`);
    break;
  }
  num += 1;
}
