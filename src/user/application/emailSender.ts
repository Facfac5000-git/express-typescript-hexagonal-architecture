// Usecase: Enviar email a usuario

export class EmailSender {
  async run(userId: string, message: string) {
    console.log(`Sending email to user ${userId} with message: ${message}`);
  }
}
