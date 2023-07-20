// Dependencies
import { EmailSender } from "../application/emailSender";
import { InMemoryUserRepository } from "./inMemoryUserRepository";
import { UserController } from "./userController";

const userRepository = new InMemoryUserRepository();

export const emailSender = new EmailSender(userRepository);
export const userController = new UserController(emailSender);
