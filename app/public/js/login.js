function fazerLogin() {
	var Email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if (username === "" || password === "") {
		alert("Por favor, preencha todos os campos.");
		return;
	}
	if (Email === "email" && password === "senha") {
		alert("Login realizado com sucesso!");
	}

	document.title = "Personal";
	var Email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if (username === "" || password === "") {
		alert("Por favor, preencha todos os campos.");
		return;
	}
	if (Email === "email" && password === "senha") {
		alert("Login realizado com sucesso!");
	}
}
