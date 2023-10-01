class HomeController {
    viewPage(req, res) {
        return res.render("pages/index.ejs", {
            data: {
                page: "Trainer"
            }
        })
    }
}

const homeControllerRead = new HomeController();

module.exports = homeControllerRead;