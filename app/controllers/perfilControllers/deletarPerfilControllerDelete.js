const usuarioModel = require("../../models/Usuario");

class DeletarPerfilController {
    async deleteUsuario(req, res) {
            const { userId } = req.params;
    
            try {
                await usuarioModel.deletUsuario(userId);
    
                return res.sendStatus(200);
            } catch (erro) {
                console.log(erro);
    
                return res.sendStatus(500);
            }
        }
    }


const deletarPerfilControllerDelete = new DeletarPerfilController();

module.exports = deletarPerfilControllerDelete;