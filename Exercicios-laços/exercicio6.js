let bateria = Number(100);

while (true) {
  if (bateria == 100) {
    console.log("Bateria 100%");
  } else if (bateria <= 20 && bateria > 0) {
    console.log(`Bateria fraca: ${bateria}%`);
  } else if (bateria == 0) {
    console.log(`Bateria descarregada: ${bateria}%`);
    break;
  } else {
    console.log(`Bateria: ${bateria}%`);
  }
  bateria -= 20;
}
