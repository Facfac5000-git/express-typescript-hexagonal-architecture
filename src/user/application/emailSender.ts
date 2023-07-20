// Usecase: Enviar email a usuario
import { UserRepository } from "../domain/userRepository";

export class EmailSender {
  constructor(private readonly userRepository: UserRepository) {}

  async run(userId: string, message: string) {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }

    console.log(`Sending email to ${user.email} with message: ${message}`);
  }
}
