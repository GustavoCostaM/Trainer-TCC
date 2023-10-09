class TermosController {
    viewPage(req, res) {
        return res.render("pages/termos.ejs", {
            data: {
                page: "Termos de Uso"
            }
        })
    }
}

const termosControllerRead = new TermosController();

module.exports = termosControllerRead;