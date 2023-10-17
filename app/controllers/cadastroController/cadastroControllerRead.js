class CadastroController {
    getPage(req, res) {
        return res.render("pages/cadastro.ejs", {
            data: {
                page_name: "Cadastro"
            }
        })
    }
}

const cadastroControllerRead = new CadastroController();

module.exports = cadastroControllerRead;