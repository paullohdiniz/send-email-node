import { Router } from "express";
import { UseController } from "./controller/UserController";

const router = Router();

const userController = new UseController();

router.post("/users", userController.create)

export { router };