const prisma = require("../server/database/prismaClient");

class Usuario {
    async createUsuario(data) {
        await prisma.usuario.create({
            data
        });
    }

    async findUserById(usuarioId) {
        return await prisma.usuario.findUnique({
            where: {
                id: usuarioId
            },
        })
    }

    async findUserByEmail(usuarioEmail) {
        return await prisma.usuario.findUnique({
            where: {
                email: usuarioEmail
            }
        })
    }

    async findAllUsers(userId) {
        return await prisma.usuario.findMany({
            where: {
                NOT: {
                    id: userId
                }
            }
        });
    }

    async updateUserSenha(novaSenha, email) {
        await prisma.usuario.update({
            where: {
                email: email
            },
            data: {
                senha: novaSenha
            }
        })
    }

    async updateUserCustomerId(userId, customerId) {
        return await prisma.usuario.update({
            where: {
                id: userId
            },
            data: {
                customer_id: customerId        
            }
        })
    }

    async updateUser(data, userId) {
        await prisma.usuario.update({
            where: {
                id: userId
            },
            data
        })
    }

    async addUserPremiumByCustomerId(customerId) {
        await prisma.usuario.update({
            where: {
                customer_id: customerId
            },
            data: {
                
            }
        })
    }
}

const usuarioModel = new Usuario();

module.exports = usuarioModel;