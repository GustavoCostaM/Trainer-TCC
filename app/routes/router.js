const express = require('express');
const router = express.Router();

const homeControllerRead = require("../controllers/homeController/homeControllerRead");

const cadastroControllerRead = require("../controllers/cadastroController/cadastroControllerRead");
const cadastroControllerCreate = require("../controllers/cadastroController/cadastroControllerCreate");

const loginControllerRead = require("../controllers/loginCotroller/loginControllerRead");
const loginControllerAuth = require("../controllers/loginCotroller/loginControllerAuth");

const autenticacaoMiddleware = require("../middlewares/autenticarMiddleware");
const validacaoRegrasMiddleware = require("../middlewares/validacaoRegrasMiddleware");
const validacaoFormulariosMiddleware = require("../middlewares/validacaoFormularioMiddleware");

router.get("/", homeControllerRead.viewPage);

router.get("/login", loginControllerRead.viewPage);
router.post("/login",
validacaoFormulariosMiddleware.validacaoLogin,
loginControllerAuth.autorizarUsuario);

router.get("/cadastro", cadastroControllerRead.viewPage);
router.post("/cadastro",
validacaoRegrasMiddleware.cadastroValidationRules,
validacaoFormulariosMiddleware.validacaoCadastro,
autenticacaoMiddleware.encriptarSenha,
cadastroControllerCreate.criarUsuario);

module.exports = router;