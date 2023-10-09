class PoliticasController {
    viewPage(req, res) {
        return res.render("pages/politicas.ejs", {
            data: {
                page: "Políticas de Privacidade"
            }
        })
    }
}

const politicasControllerRead = new PoliticasController();

module.exports = politicasControllerRead;