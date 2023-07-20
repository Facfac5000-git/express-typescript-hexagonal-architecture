// Interface: EmailSender

export interface EmailSender {
  send(email: string, message: string): Promise<void>;
}
