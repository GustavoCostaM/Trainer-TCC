class CadastroController {
    viewPage(req, res) {
        return res.render("pages/cadastro.ejs", {
            data: {
                page: "Cadastro"
            }
        })
    }
}

const cadastroControllerRead = new CadastroController();

module.exports = cadastroControllerRead;