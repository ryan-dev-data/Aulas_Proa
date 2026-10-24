for (let v = 60; v <= 100; v += 10) {
  if (v <= 80) {
    console.log(`${v}Km/h. Velocidade normal.`);
  } else if (v > 80 && v <= 90) {
    console.log(`${v}Km/h. Multa leve!.`);
  } else if (v > 90 || v == 100) {
    console.log(`${v}Km/h. Multa grave!.`);
  }
}
