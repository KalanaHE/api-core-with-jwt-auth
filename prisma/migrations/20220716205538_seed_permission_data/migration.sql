-- AddInitialRoles
INSERT INTO `role` (`name`, `description`, `createdAt`) VALUES ('GENERAL_USER_USER', '', '2020-05-05 06:03:28');
INSERT INTO `role` (`name`, `description`, `createdAt`) VALUES ('ADMIN_USER', '', '2020-05-05 06:03:28');

-- AddInitialPermissions
INSERT INTO `permission` (`roleId`, `name`, `description`, `createdAt`) VALUES (1, 'VIEW_GENERAL_USER_HOME', '', '2020-05-05 06:03:28');
INSERT INTO `permission` (`roleId`, `name`, `description`, `createdAt`) VALUES (1, 'VIEW_GENERAL_USER_PAGE_ONE', '', '2020-05-05 06:03:28');
INSERT INTO `permission` (`roleId`, `name`, `description`, `createdAt`) VALUES (1, 'VIEW_GENERAL_USER_PAGE_TWO', '', '2020-05-05 06:03:28');
INSERT INTO `permission` (`roleId`, `name`, `description`, `createdAt`) VALUES (2, 'VIEW_ADMIN_USER_HOME', '', '2020-05-05 06:03:28');
INSERT INTO `permission` (`roleId`, `name`, `description`, `createdAt`) VALUES (2, 'VIEW_ADMIN_USER_PAGE_ONE', '', '2020-05-05 06:03:28');
INSERT INTO `permission` (`roleId`, `name`, `description`, `createdAt`) VALUES (2, 'VIEW_ADMIN_USER_PAGE_TWO', '', '2020-05-05 06:03:28');




-- AddInitialUsers
-- INSERT INTO `user` (`firstName`, `lastName`, `email`, `password`, `mobile`, `gender`, `roleId`, `status`, `createdAt`) VALUES ('Kalana', 'Hettiatachchi', 'kalana@test.com', '', '0771234567', 'MALE', 2, 'ACTIVE', '2020-05-05 06:03:28');