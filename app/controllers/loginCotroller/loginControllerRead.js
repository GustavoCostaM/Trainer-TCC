class LoginController {
    getPage(req, res) {
        return res.render("pages/login.ejs", {
            data: {
                page_name: "Login"
            }
        })
    }
}

const loginControllerRead = new LoginController();

module.exports = loginControllerRead;