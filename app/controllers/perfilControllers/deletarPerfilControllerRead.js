const usuarioModel = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

class DeletarPerfilController {
    async getPage(req, res) {
        const token = req.session.token;
        const {userId} = jwt.decode(token, process.env.SECRET);
        const usuario = await usuarioModel.findUserById(userId);

        return res.render("pages/deletar-perfil.ejs", {
            data: {
                page_name: "Deletar Conta",
                usuario

            }
        })
    }
}

const deletarPerfilControllerRead = new DeletarPerfilController();

module.exports = deletarPerfilControllerRead;