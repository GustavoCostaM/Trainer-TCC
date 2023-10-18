const usuarioModel = require("../../models/Usuario");

class CadastroController {
    constructor() {
		this.createUser = this.createUser.bind(this);
	}
    async createUser(req, res) {
        const {
            nome,
            nome_de_usuario,
            email,
            senha,
            confirmacao_senha,
            telefone,
            logradouro,
            numero_residencial,
            bairro,
            cidade,
            estado,
            cep
        } = req.body;
        const senhaCriptografada = req.senhaEncriptada;

        try {
            await usuarioModel.createUser({
                data: {
                    nome,
                    nome_de_usuario,
                    email,
                    senha: senhaCriptografada,
                    telefone,
                    logradouro,
                    numero_residencial: Number(numero_residencial),
                    bairro,
                    cidade,
                    estado,
                    cep
                }
            })

            return res.redirect("/login");
        } catch (erro) {
            console.log(erro);

            if (erro.code === "P2002") {
                return res.render("pages/cadastro.ejs", {
                    data: {
                        page_name: "Cadastro",
                        input_values: {
                            nome,
                            nome_de_usuario,
                            email,
                            senha,
                            confirmacao_senha,
                            telefone,
                            logradouro,
                            numero_residencial,
                            bairro,
                            cidade,
                            estado,
                            cep
                        },
                        errors: {
                            email_error: {
                                msg: "Email já cadastrado!"
                            }
                        }
                    }
                });
            }

            return res.render("pages/cadastro.ejs", {
                data: {
                    page_name: "Cadastro",
                    input_values: {
                        nome,
                        nome_de_usuario,
                        email,
                        senha,
                        confirmacao_senha,
                        telefone,
                        logradouro,
                        numero_residencial,
                        bairro,
                        cidade,
                        estado,
                        cep
                    },
                    errors: {
                        sistema_error: {
                            msg: "Erro de sistema, tente novamente mais tarde!"
                        }
                    }
                }
            });
        }
    }
}

const CadastroControllerCreate = new CadastroController();

module.exports = CadastroControllerCreate;