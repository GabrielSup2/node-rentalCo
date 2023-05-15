import { Router } from "express";
import multer from "multer";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarcontroller } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "@config/upload";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();

const updateUserAvatarcontroller = new UpdateUserAvatarcontroller();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
    "/avatar", ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarcontroller.handle
);

export { usersRoutes };
