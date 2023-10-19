const usuarioModel = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

class ValidacaoFormularios {
    constructor() {
        this.validacaoCadastro = this.validacaoCadastro.bind(this);
        this.validacaoLogin = this.validacaoLogin.bind(this);
		this.editarPerfilValidation = this.editarPerfilValidation.bind(this);
		this.deletarUsuario = this.deletarUsuario.bind(this);
	}

    validacaoCadastro(req, res, next) {
		const errors = validationResult(req);
		const { senha, confirmacao_senha } = req.body;

		this.#validacaoConfirmarSenha(confirmacao_senha, senha, errors);

		if (!errors.isEmpty()) {
			const {
                nome,
                nome_de_usuario,
                email,
                telefone,
                logradouro,
                numero_residencial,
                bairro,
                cidade,
                estado,
                cep
            } = req.body;

			const nome_error = errors.errors.find((error) => error.path === "nome");
            const nome_de_usuario_error = errors.errors.find((error) => error.path === "nome_de_usuario");
			const email_error = errors.errors.find((error) => error.path === "email");
			const telefone_error = errors.errors.find((error) => error.path === "telefone");
			const senha_error = errors.errors.find((error) => error.path === "senha");
			const confirmacao_senha_error = errors.errors.find((error) => error.path === "confirmacao_senha");
            const logradouro_error = errors.errors.find((error) => error.path === "logradouro");
            const numero_residencial_error = errors.errors.find((error) => error.path === "numero_residencial");
            const bairro_error = errors.errors.find((error) => error.path === "bairro");
            const cidade_error = errors.errors.find((error) => error.path === "cidade");
            const estado_error = errors.errors.find((error) => error.path === "estado");
            const cep_error = errors.errors.find((error) => error.path === "cep");

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
						nome_error,
                        nome_de_usuario_error,
						email_error,
						telefone_error,
						senha_error,
						confirmacao_senha_error,
                        logradouro_error,
                        numero_residencial_error,
                        bairro_error,
                        cidade_error,
                        estado_error,
                        cep_error
					},
				},
			});
		}

		return next();
	}

	editarPerfilValidation(req, res, next) {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			const {nome, nome_de_usuario, email, telefone, logradouro, numero_residencial, bairro, 
				cidade, estado, cep } = req.body;

			const nome_error = errors.errors.find((error) => error.path === "nome");
            const nome_de_usuario_error = errors.errors.find((error) => error.path === "nome_de_usuario");
			const email_error = errors.errors.find((error) => error.path === "email");
			const telefone_error = errors.errors.find((error) => error.path === "telefone");
            const logradouro_error = errors.errors.find((error) => error.path === "logradouro");
            const numero_residencial_error = errors.errors.find((error) => error.path === "numero_residencial");
            const bairro_error = errors.errors.find((error) => error.path === "bairro");
            const cidade_error = errors.errors.find((error) => error.path === "cidade");
            const estado_error = errors.errors.find((error) => error.path === "estado");
            const cep_error = errors.errors.find((error) => error.path === "cep");

			return res.render("pages/editar-perfil.ejs", {
				data: {
					page_name: "Editar perfil",
					input_values: {
						nome,
                        nome_de_usuario,
                        email,
                        telefone,
                        logradouro,
                        numero_residencial,
                        bairro,
                        cidade,
                        estado,
                        cep
					},
					errors: {
						nome_error,
                        nome_de_usuario_error,
						email_error,
						telefone_error,
                        logradouro_error,
                        numero_residencial_error,
                        bairro_error,
                        cidade_error,
                        estado_error,
                        cep_error
					},
				},
			});
		}

		return next();
	}

	async validacaoLogin(req, res, next) {
		const { email, senha } = req.body;

		const user = await usuarioModel.findUserByEmail(email);

		if (!user) {
			return res.render("pages/login.ejs", {
				data: {
					input_values: {
						email,
						senha,
					},
					errors: {
						email_error: {
							msg: "Usuário não encontrado",
						},
					},
				},
			});
		}

		bcrypt
			.compare(senha, user.senha)
			.then((auth) => {
				if (auth) {
					const token = jwt.sign({ userId: user.id }, process.env.SECRET);

					req.session.token = token;

					return next();
				}

				return res.render("pages/login.ejs", {
					data: {
						input_values: {
							email,
							senha,
						},
						errors: {
							senha_error: {
								msg: "Senha incorreta",
							},
						},
					},
				});
			})
			.catch((erro) => {
				console.log(erro);
				return res.render("pages/login.ejs", {
					data: {
						input_values: {
							email,
							senha,
						},
						errors: {
							sistema_error: {
								msg: "Erro de sistema, tente novamente mais tarde!",
							},
						},
					},
				});
			});
	}

	async deletarUsuario(req, res, next) {
		const { senha } = req.body;

		const user = await usuarioModel.deleteUsuario(id);
		
		bcrypt
			.compare(senha, user.senha)
			.then((auth) => {
				if (auth) {
					const token = jwt.sign({ userId: user.id }, process.env.SECRET);

					req.session.token = token;

					return next();
				}

				return res.render("pages/deletar-perfil.ejs", {
					data: {
						input_values: {
							senha,
						},
						errors: {
							senha_error: {
								msg: "Senha incorreta",
							},
						},
					},
				});
			})
			.catch((erro) => {
				console.log(erro);
				return res.render("pages/deletar-perfil.ejs", {
					data: {
						input_values: {
							senha,
						},
						errors: {
							sistema_error: {
								msg: "Erro de sistema, tente novamente mais tarde!",
							},
						},
					},
				});
			});
	}

    #validacaoConfirmarSenha(confirmacao_senha, senha, errors) {
		if (confirmacao_senha !== senha) {
			errors.errors.push({
				msg: "As senhas devem ser iguais!",
				path: "confirmacao_senha",
			});
		}
	}
}

const validacaoFormulariosMiddleware = new ValidacaoFormularios();

module.exports = validacaoFormulariosMiddleware;