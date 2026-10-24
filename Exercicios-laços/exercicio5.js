let carga = Number(0);

while (true) {
  carga += 30;
  if (carga < 100) {
    console.log(`Carga atual: ${carga}Kg`);
  } else {
    console.log("Carga máxiama é de 100kg. Limite atingido!");
    break;
  }
}
