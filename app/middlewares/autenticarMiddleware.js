const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

class Autenticacao {
    async encriptarSenha(req, res, next) {
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
        const salt = Number(process.env.SALT_ROUNDS);

        try {
            const hash = await bcrypt.hash(senha, salt);

            req.senhaEncriptada = hash;

            return next();
        } catch (erro) {
            console.log(erro);

            return res.render("pages/cadastro", {
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

    validateJWT(req, res, next) {
        const token = req.session.token;
        req.session.loginRedirectUrl = req.url;

        if (!token) {
            return res.redirect("/login");
        }

        try {
            jwt.verify(token, process.env.SECRET);

            return next();
        } catch (erro) {
            console.log(erro);

            return res.redirect("/login");
        }
    }
}

const AutenticacaoMiddleware = new Autenticacao();

module.exports = AutenticacaoMiddleware;