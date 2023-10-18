const express = require('express');
const router = express.Router();

const jwt = require("jsonwebtoken");


const homeControllerRead = require("../controllers/homeController/homeControllerRead");

const personaisControllerRead = require("../controllers/personaisController/personaisControllerRead");

const perfilPersonalControllerRead = require("../controllers/perfilPersonalController/perfilPersonalControllerRead");

const politicasControllerRead = require("../controllers/politicasController/politicasControllerRead");

const termosControllerRead = require("../controllers/termosController/termosControllerRead");

const cadastroControllerRead = require("../controllers/cadastroController/cadastroControllerRead");
const cadastroControllerCreate = require("../controllers/cadastroController/cadastroControllerCreate");

const loginControllerRead = require("../controllers/loginCotroller/loginControllerRead");
const loginControllerAuth = require("../controllers/loginCotroller/loginControllerAuth");

const autenticacaoMiddleware = require("../middlewares/autenticarMiddleware");
const validacaoRegrasMiddleware = require("../middlewares/validacaoRegrasMiddleware");
const validacaoFormulariosMiddleware = require("../middlewares/validacaoFormularioMiddleware");

const logoutControllerRead = require("../controllers/perfilControllers/logoutControllerRead");

const editarPerfilControllerRead = require("../controllers/perfilControllers/editarPerfilControllerRead");
const editarPerfilControllerUpdate = require("../controllers/perfilControllers/editarPerfilControllerUpdate");

const homePerfilControllerRead = require("../controllers/homePerfilController/homePerfilControllerRead");


router.get("/", homeControllerRead.viewPage);

router.get("/personais", personaisControllerRead.viewPage);

router.get("/perfilPersonal", perfilPersonalControllerRead.viewPage);

router.get("/politicas", politicasControllerRead.viewPage);

router.get("/termos", termosControllerRead.viewPage);

router.get("/login", loginControllerRead.viewPage);
router.post("/login",
validacaoFormulariosMiddleware.validacaoLogin,
loginControllerAuth.autorizarUsuario);

router.get("/cadastro", cadastroControllerRead.getPage);
router.post("/cadastro",
validacaoRegrasMiddleware.cadastroValidationRules,
validacaoFormulariosMiddleware.validacaoCadastro,
autenticacaoMiddleware.encriptarSenha,
cadastroControllerCreate.createUsuario);

router.get("/logout",
autenticacaoMiddleware.validateJWT,
logoutControllerRead.logout);

router.get("/editar-perfil",
autenticacaoMiddleware.validateJWT,
editarPerfilControllerRead.getPage);

router.post("/editar-perfil",
autenticacaoMiddleware.validateJWT,
validacaoRegrasMiddleware.editarPerfilValidationRules,
validacaoFormulariosMiddleware.editarPerfilValidation,
editarPerfilControllerUpdate.editUser);

router.get("/perfil-user",
autenticacaoMiddleware.validateJWT,
homePerfilControllerRead.getPage);


module.exports = router;