let convidados = ["Ana", "Bruno", "Caio"];

let nomeBusca = "Bruno";

if (convidados.includes(nomeBusca)) {
  console.log(`${nomeBusca} está na lista. Acesso Liberado`);
} else {
  console.log(`${nomeBusca} não está na lista. Acesso Negado`);
}
