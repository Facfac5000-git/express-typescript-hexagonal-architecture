// Router for the user module

import express from "express";

import { userController } from "./dependencies";

const userRouter = express.Router();

userRouter.post("/:userId/hello", userController.run.bind(userController));

export { userRouter };
