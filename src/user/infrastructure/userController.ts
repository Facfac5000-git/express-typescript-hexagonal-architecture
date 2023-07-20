// Controller for the user module

import { Request, Response } from "express";

import { EmailSender } from "../application/emailSender";

export class UserController {
  constructor(private readonly EmailSender: EmailSender) {}

  async run(req: Request, res: Response) {
    const userId = req.params.userId;
    await this.EmailSender.run(userId, `Hello User!`);
    res.status(200).send();
  }
}
