let corredores = ["Marcos", "Lucas", "Julia", "Sofia", "Pedro"];
console.log("=== PÓDIO DOS CORREDORES ===");
for (let p = 0, c = corredores.slice(0, 3); p < c.length; p++) {
  console.log(`${p + 1}° ${c[p]}`);
}
