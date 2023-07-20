// Controller for the user module

import { Request, Response } from "express";

import { WelcomeEmailSender } from "../application/welcomeEmailSender";

export class UserController {
  constructor(private readonly EmailSender: WelcomeEmailSender) {}

  async run(req: Request, res: Response) {
    const userId = req.params.userId;
    try {
      await this.EmailSender.run(userId, `Hello to our application!`);
      res.status(200).send(`Email sent to user with id ${userId}`);
    } catch (err) {
      console.error(err);
      res.status(400).send(`Error: User with id ${userId} doesn't exist`);
      return;
    }
  }
}
