// Dependencies
import { EmailSender } from "../application/emailSender";
import { UserController } from "./userController";

export const emailSender = new EmailSender();
export const userController = new UserController(emailSender);
