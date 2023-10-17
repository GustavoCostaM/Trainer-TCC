const usuarioModel = require("../../../models/Usuario");
const jwt = require("jsonwebtoken");

class HomePerfilController {
    async getPage(req, res) {
        const token = req.session.token;
        const {userId} = jwt.decode(token, process.env.SECRET);
        const user = await usuarioModel.findUserById(userId);


        return res.render("pages/perfil-user.ejs", {
            data: {
                page_name: "Perfil",                
                user
            }
        })
    }
}

const HomePerfilControllerRead = new HomePerfilController();

module.exports = HomePerfilControllerRead;