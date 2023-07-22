// Dependencies
import { WelcomeEmailSender } from "../application/welcomeEmailSender";
import { FakeEmailSender } from "./fakeEmailSender";
import { mongoDBUserRepository } from "./mongoDBUserRepository";
import { UserController } from "./userController";

const userRepository = new mongoDBUserRepository();
const emailSender = new FakeEmailSender();

export const welcomeEmailSender = new WelcomeEmailSender(
  userRepository,
  emailSender
);
export const userController = new UserController(welcomeEmailSender);
