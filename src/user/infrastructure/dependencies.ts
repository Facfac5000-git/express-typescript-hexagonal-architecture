// Dependencies
import { WelcomeEmailSender } from "../application/welcomeEmailSender";
import { FakeEmailSender } from "./fakeEmailSender";
import { InMemoryUserRepository } from "./inMemoryUserRepository";
import { UserController } from "./userController";

const userRepository = new InMemoryUserRepository();
const emailSender = new FakeEmailSender();

export const welcomeEmailSender = new WelcomeEmailSender(
  userRepository,
  emailSender
);
export const userController = new UserController(welcomeEmailSender);
