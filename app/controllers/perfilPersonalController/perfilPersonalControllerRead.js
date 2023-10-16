class PersonaisController {
    viewPage(req, res) {
        return res.render("pages/perfilPersonal.ejs", {
            data: {
                page: "Perfil Personal"
            }
        })
    }
}

const personaisControllerRead = new PersonaisController();

module.exports = personaisControllerRead;