let emailsCadastrados = ["admin@email.com", "contato@email.com"];

let novoEmail = "usuario@email.com";

if (emailsCadastrados.includes(novoEmail)) {
  console.log("Erro: E-mail já cadastrado.");
} else {
  emailsCadastrados.push(novoEmail);
  console.log("Cadastro realizado com sucesso!");
  for (let i = 0; i < emailsCadastrados.length; i++) {
    console.log(emailsCadastrados[i]);
  }
}
