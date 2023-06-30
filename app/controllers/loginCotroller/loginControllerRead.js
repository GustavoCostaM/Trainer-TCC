class LoginController {
    viewPage(req, res) {
        return res.render("pages/login.ejs", {
            data: {
                page: "Login"
            }
        })
    }
}

const loginControllerRead = new LoginController();

module.exports = loginControllerRead;