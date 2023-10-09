-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(130) NOT NULL,
    `nome_de_usuario` VARCHAR(130) NOT NULL,
    `email` VARCHAR(130) NOT NULL,
    `senha` CHAR(60) NOT NULL,
    `telefone` VARCHAR(15) NOT NULL,
    `logradouro` VARCHAR(130) NOT NULL,
    `numero_residencial` INTEGER NOT NULL,
    `bairro` VARCHAR(130) NOT NULL,
    `cidade` VARCHAR(130) NOT NULL,
    `estado` VARCHAR(130) NOT NULL,
    `cep` VARCHAR(9) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
