// Usecase: Enviar email a usuario
import { EmailSender } from "../domain/emailSender";
import { UserRepository } from "../domain/userRepository";

export class WelcomeEmailSender {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailSender: EmailSender
  ) {}

  async run(userId: string, message: string) {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }

    await this.emailSender.send(user.email, message);
  }
}
