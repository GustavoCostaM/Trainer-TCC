const { body } = require("express-validator");

const regrasValidacao = {
    cadastroValidationRules: [
        body("nome")
        .trim()
        .isLength({min: 3, max: 255})
        .withMessage("Insira seu nome completo!"),
        body("nome_de_usuario")
        .trim()
        .isLength({min: 3, max: 255})
        .withMessage("Insira um nome de usuário!"),
        body("email")
        .isEmail()
        .withMessage("Insira seu email completo!"),
        body("telefone")
        .trim()
        .isLength({min: 15, max: 15})
        .withMessage("Insira seu número de telefone! (Apenas números)"),
        body("senha")
        .trim()
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })
        .withMessage("Use uma senha forte com números, letras (maiúsculas e minúsculas), e símbolos (!, $, %, ...). Mínimo de 8 caracteres."),
        body("logradouro")
        .trim()
        .isLength({min: 2, max: 255})
        .withMessage("Informe seu logradouro"),
        body("numero_residencial")
        .trim()
        .isInt()
        .withMessage("Informe o número da sua residência"),
        body("bairro")
        .trim()
        .isLength({min: 2, max: 255})
        .withMessage("Informe seu bairro"),
        body("cidade")
        .trim()
        .isLength({min: 2, max: 255})
        .withMessage("Informe sua cidade"),
        body("estado")
        .trim()
        .isLength({min: 2, max: 30})
        .withMessage("Informe seu estado"),
        body("cep")
        .trim()
        .isLength({min: 9, max: 9})
        .withMessage("Digite seu CEP! (Apenas números)")
    ],

    editarPerfilValidationRules: [
        body("nome")
        .trim()
        .isLength({min: 3, max: 255})
        .withMessage("Insira seu nome completo!"),
        body("nome_de_usuario")
        .trim()
        .isLength({min: 3, max: 255})
        .withMessage("Insira um nome de usuário!"),
        body("email")
        .isEmail()
        .withMessage("Insira seu email completo!"),
        body("telefone")
        .trim()
        .isLength({min: 15, max: 15})
        .withMessage("Insira seu número de telefone! (Apenas números)"),
        body("logradouro")
        .trim()
        .isLength({min: 2, max: 255})
        .withMessage("Informe seu logradouro"),
        body("numero_residencial")
        .trim()
        .isInt()
        .withMessage("Informe o número da sua residência"),
        body("bairro")
        .trim()
        .isLength({min: 2, max: 255})
        .withMessage("Informe seu bairro"),
        body("cidade")
        .trim()
        .isLength({min: 2, max: 255})
        .withMessage("Informe sua cidade"),
        body("estado")
        .trim()
        .isLength({min: 2, max: 30})
        .withMessage("Informe seu estado"),
        body("cep")
        .trim()
        .isLength({min: 9, max: 9})
        .withMessage("Digite seu CEP! (Apenas números)")
    ],
}

module.exports = regrasValidacao;