let filaBanco = ["Carlos", "Maria", "João"];

filaBanco.unshift("Seu José");

filaBanco.shift();

console.log(
  `Atendimento de hoje: Seu José. Ainda restam ${filaBanco.join(", ")}`,
);
