// Hardcoded Email Sender
import { EmailSender } from "../domain/emailSender";

export class FakeEmailSender implements EmailSender {
  async send(email: string, message: string): Promise<void> {
    console.log(`Sending email to ${email} with message: ${message}`);
  }
}
