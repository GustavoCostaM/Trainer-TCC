function cadastro(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmarPassword = document.getElementById("confirmarPassword").value;
    var telefone = document.getElementById("telefone").value;
    var logradouro = document.getElementById("logradouro").value;
    var bairro = document.getElementById("bairro").value;
    var numero = document.getElementById("numero").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var cep = document.getElementById("cep").value;

    if (nome === "" || email === "" || password === "" || confirmarPassword === "" || telefone === "" || logradouro === "" || bairro === "" || numero === "" || cidade === "" || estado === "" || cep === "") {
      alert("Por favor, complete todos os campos.");
      return;
    }

    if (password !== confirmarPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert("Registo com sucesso. Bem-vindo, " + nome + "!");
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmarPassword").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("logradouro").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("cep").value = "";


}




