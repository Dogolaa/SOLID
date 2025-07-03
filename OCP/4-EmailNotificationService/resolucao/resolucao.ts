// Basicamente um contrato, "diz" que qualquer coisa que for um
// EmailNotification TEM QUE ter um método send
interface EmailNotification {
  send(to: string, message: string): void;
}

// É o objeto real que sabe como enviar um email usando o protocolo
// SMTP, ele precisa das configs smtpServer, username e password
// para fazer o trabalho dele
class SMTPEmailNotification implements EmailNotification {
  constructor(
    private smtpServer: string,
    private username: string,
    private password: string
  ) {}

  send(to: string, message: string): void {
    console.log(`SMTP: Sending email to ${to}`);
    console.log(
      `SMTP Config: Server=${this.smtpServer}, User=${this.username}`
    );
  }
}

class SESEmailNotification implements EmailNotification {
  constructor(
    private awsRegion: string,
    private awsAccessKey: string,
    private awsSecretKey: string
  ) {}

  send(to: string, message: string): void {
    console.log(`SES: Sending email to ${to}`);
    console.log(`AWS Config: Region=${this.awsRegion}`);
  }
}

class SendGridEmailNotification implements EmailNotification {
  constructor(private apiKey: string) {}

  send(to: string, message: string): void {
    console.log(`SendGrid: Sending email to ${to}`);
    console.log(`SendGrid Config: API Key=${this.apiKey}`);
  }
}

// É uma classe abstrata, uma fábrica genérica de notificações por
// email, como seu método abstrato createNotification, mostra que ela
// não save como criar a notifação sozinha e delega as suas filhas

// O método sendEmail mostra o passo a passo de como enviar um email
// primeiro criando uma notificação e depois use o notification.send
// para envia-la.

// O método createNotification() é o coração do Factory Method.
// Ele diz: "Eu preciso de um EmailNotification, mas não sei qual
// tipo específico. Deixo essa parte para quem me herdar.

//user@example", "Hello via EmailNotificationService!
abstract class EmailNotificationCreator {
  abstract createNotification(): EmailNotification;

  sendEmail(to: string, message: string): void {
    const notification = this.createNotification();
    notification.send(to, message);
  }
}

//É uma classe concreta, uma "fábrica específica para SMTP".
// Ela é uma "filha" do EmailNotificationCreator.

//implementa o método createNotification(). É ela quem finalmente
// decide e cria uma SMTPEmailNotification. Ela também se certifica
// de que as configurações do SMTP estão corretas antes de criar.

class SMTPNotificationCreator extends EmailNotificationCreator {
  createNotification(): EmailNotification {
    const smtpServer = process.env.SMTP_SERVER;
    const username = process.env.SMTP_USERNAME;
    const password = process.env.SMTP_PASSWORD;

    if (!smtpServer || !username || !password) {
      throw new Error(
        "Missing SMTP configuration: Please set SMTP_SERVER, SMTP_USERNAME, and SMTP_PASSWORD in the environment."
      );
    }

    return new SMTPEmailNotification(smtpServer, username, password);
  }
}

class SESEmailNotificationCreator extends EmailNotificationCreator {
  createNotification(): EmailNotification {
    const awsRegion = process.env.AWS_REGION;
    const awsAccessKey = process.env.AWS_ACCESS_KEY;
    const awsSecretKey = process.env.AWS_SECRET_KEY;

    if (!awsRegion || !awsAccessKey || !awsSecretKey) {
      throw new Error(
        "Missing AWS SES configuration: Please set AWS_REGION, AWS_ACCESS_KEY, and AWS_SECRET_KEY in the environment."
      );
    }

    return new SESEmailNotification(awsRegion, awsAccessKey, awsSecretKey);
  }
}

class SendGridEmailNotificationCreator extends EmailNotificationCreator {
  createNotification(): EmailNotification {
    const apiKey = process.env.SENDGRID_API_KEY;

    if (!apiKey) {
      throw new Error(
        "Missing SendGrid configuration: Please set SENDGRID_API_KEY in the environment."
      );
    }

    return new SendGridEmailNotification(apiKey);
  }
}

//É o "cliente" do sistema, a parte que usa as fábricas para enviar
//e-mails.

//Ele é "cego" para o tipo específico de e-mail que está sendo
// enviado. Ele só sabe que recebe um EmailNotificationCreator
// (uma "fábrica de notificações") e pede para essa fábrica enviar
// um e-mail.

//Isso significa que ele não se importa se o e-mail é via SMTP,
// SES ou SendGrid. Sua lógica de envio é sempre a mesma,
// independentemente do provedor.

class EmailNotificationService {
  sendEmail(provider: EmailNotificationCreator): void {
    provider.sendEmail("user@example", "Hello via EmailNotificationService!");
  }
}

const notificationService = new EmailNotificationService();
notificationService.sendEmail(new SMTPNotificationCreator());
notificationService.sendEmail(new SESEmailNotificationCreator());
notificationService.sendEmail(new SendGridEmailNotificationCreator());

// const smtpCreator = new SMTPNotificationCreator();
// smtpCreator.sendEmail("user1@example.com", "Hello via SMTP!");

// const sesCreator = new SESEmailNotificationCreator();
// sesCreator.sendEmail("user@example", "Hello via SES!");

// const sendGridCreator = new SendGridEmailNotificationCreator();
// sendGridCreator.sendEmail("user@example", "Hello via SendGrid!");
