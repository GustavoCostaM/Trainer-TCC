class LoginController {
    async autorizarUsuario(req, res) {
        return res.redirect("/");
    }
}

const LoginControllerReadAuth = new LoginController();

module.exports = LoginControllerReadAuth;