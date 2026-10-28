let corredores = ["Marcos", "Lucas", "Julia", "Sofia", "Pedro"];
console.log("=== PÓDIO DOS CORREDORES ===");
let podio = corredores.slice(0, 3);
for (let p = 0; p < podio.length; p++) {
  console.log(`${p + 1}° ${podio[p]}`);
}
