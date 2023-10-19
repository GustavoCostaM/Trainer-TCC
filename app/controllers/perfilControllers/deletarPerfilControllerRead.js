class DeletarPerfilController {
    getPage(req, res) {
        return res.render("pages/deletar-perfil.ejs", {
            data: {
                page_name: "Deletar Conta"
            }
        })
    }
}

const deletarPerfilControllerRead = new DeletarPerfilController();

module.exports = deletarPerfilControllerRead;