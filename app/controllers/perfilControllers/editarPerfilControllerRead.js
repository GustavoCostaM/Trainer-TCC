const usuarioModel = require("../../../models/Usuario");
const jwt = require("jsonwebtoken");

class EditarPerfilController {
    async getPage(req, res) {
        const token = req.session.token;
        const {userId} = jwt.decode(token, process.env.SECRET);

        const user = await usuarioModel.findUserById(userId);



    return res.render("pages/editar-perfil.ejs", {
        data: {
          page_name: "Trainer",
          input_values: {
            nome: user.name,
            nome_de_usuario: user.nome_de_usuario,
            email: user.email,
            telefone: user.telefone,
            logradouro: user.logradouro,
            numero_residencial: user.numero_residencial,
            bairro: user.bairro,
            cidade: user.cidade,
            estado: user.estado,
            cep: user.cep
          },
        },
      });
    };
};
    
const editarPerfilControllerRead = new EditarPerfilController();

module.exports = editarPerfilControllerRead;