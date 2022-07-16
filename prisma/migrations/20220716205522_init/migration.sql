-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(200) NOT NULL,
    `lastName` VARCHAR(200) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `mobile` VARCHAR(200) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NULL,
    `dateOfBirth` DATETIME(6) NULL,
    `roleId` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_mobile_key`(`mobile`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `description` VARCHAR(200) NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `role_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roleId` INTEGER NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `description` VARCHAR(200) NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `permission_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `countryCode` VARCHAR(5) NOT NULL,
    `countryName` VARCHAR(50) NOT NULL,
    `diallingNode` VARCHAR(5) NOT NULL,

    UNIQUE INDEX `country_countryCode_key`(`countryCode`),
    UNIQUE INDEX `country_countryName_key`(`countryName`),
    UNIQUE INDEX `country_diallingNode_key`(`diallingNode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permission` ADD CONSTRAINT `permission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
