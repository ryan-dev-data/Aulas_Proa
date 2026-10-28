let filaBanco = ["Carlos", "Maria", "João"];

filaBanco.unshift("Seu José");

let atendido = filaBanco.shift();

console.log(
  `Atendimento de hoje: ${atendido}. Ainda restam ${filaBanco.join(", ")}`,
);
