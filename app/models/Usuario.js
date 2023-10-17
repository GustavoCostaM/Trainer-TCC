const prisma = require("../../server/database/prismaClient");

class Usuario {
    async findUserById(userId) {
        const user = await prisma.Usuario.findUnique({
            where: {
                id: userId
            }
        });

        return user;
    }

    async findUserByEmail(userEmail) {
        const user = await prisma.Usuario.findUnique({
            where: {
                email: userEmail
            }
        })

        return user;
    }

    async createUser(data) {
        await prisma.Usuario.create({
            data
        })
    }

    async updateUserPassword(userEmail, userNewPassword) {
        await prisma.Usuario.update({
            where: {
                email: userEmail
            },
            data: {
                senha: userNewPassword
            }
        });
    }

    async updateUserCustomerId(userId, customerId) {
        await prisma.Usuario.update({
            where: {
                id: userId
            },
            data: {
                customer_id: customerId
            }
        })
    }

    async updatePerfil(data, userId){
        await prisma.Usuario.update({
            where: {
                id: userId
            },
            data
        })
    }

}

const usuarioModel = new Usuario();

module.exports = usuarioModel;