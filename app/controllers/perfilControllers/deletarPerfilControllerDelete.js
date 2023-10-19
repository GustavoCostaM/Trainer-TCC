class DeletarPerfilController {
    async deleteUsuario(req, res) {
        const deletarRedirectUrl = req.session.deletarRedirectUrl ? req.session.deletarRedirectUrl : "/";
        req.session.deletarRedirectUrl = null;
        return res.redirect(deletarRedirectUrl);
    }
}

const deletarPerfilControllerDelete = new DeletarPerfilController();

module.exports = deletarPerfilControllerDelete;