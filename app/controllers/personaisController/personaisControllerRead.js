class PersonaisController {
    viewPage(req, res) {
        return res.render("pages/personais.ejs", {
            data: {
                page: "Personais"
            }
        })
    }
}

const personaisControllerRead = new PersonaisController();

module.exports = personaisControllerRead;