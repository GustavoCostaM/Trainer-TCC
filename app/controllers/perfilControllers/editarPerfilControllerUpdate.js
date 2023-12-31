const usuarioModel = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

class EditarPerfilController {	
  constructor() {
		this.editUser = this.editUser.bind(this);
	}

    async editUser(req, res) {
    const token = req.session.token;
    const {userId} = jwt.decode(token, process.env.SECRET);
    const user = await usuarioModel.findUserById(userId);

    const {nome, nome_de_usuario, email, telefone, logradouro, numero_residencial, bairro, 
        cidade, estado, cep } = req.body;

    try {
		await usuarioModel.updatePerfil({
            nome,
            nome_de_usuario,
            email,
            telefone,
            logradouro,
            numero_residencial: Number(numero_residencial),
            bairro,
            cidade,
            estado,
            cep
		}, userId);
		return res.redirect("/perfil-user");
		} catch (erro) {
			console.log(erro);

			if (erro.code === "P2002") {
				return res.render("pages/editar-perfil.ejs", {
					data: {
						page_name: "Editar perfil",
						input_values: {
                            nome,
                            nome_de_usuario,
                            email,
                            telefone,
                            logradouro,
                            numero_residencial,
                            bairro,
                            cidade,
                            estado,
                            cep
						},
						errors: {
							email_error: {
								msg: "Email já cadastrado!",
							},
						},
					},
				});
			}

			return res.render("pages/editar-perfil.ejs", {
				data: {
					page_name: "Editar perfil",
					input_values: {
                        nome,
                        nome_de_usuario,
                        email,
                        telefone,
                        logradouro,
                        numero_residencial,
                        bairro,
                        cidade,
                        estado,
                        cep
					},
					errors: {
						sistema_error: {
							msg: "Erro de sistema, tente novamente mais tarde!",
						},
					},
				},
			});
		}
    }
}

const editarPerfilControllerUpdate = new EditarPerfilController()

module.exports = editarPerfilControllerUpdate;