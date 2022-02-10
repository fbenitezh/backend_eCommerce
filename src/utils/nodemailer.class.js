import nodemailer from "nodemailer";

class Nodemailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: process.env.EMAIL_GMAIL,
        pass: process.env.PASS_GMAIL,
      },
    });  
  }

  /**
   * Envia un email a la cuenta de administrador
   * @param {String} from Direccion que envia el email
   * @param {String} to Direccion a donde llega el email
   * @param {String} subject titulo
   * @param {String} content Contenido del mail (html)
   */
  async send(from, subject, to, content) {
    try {
      const info = await this.transporter.sendMail({
        from,
        to,
        subject,
        html: content,
      });
      return info;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Nodemailer;
