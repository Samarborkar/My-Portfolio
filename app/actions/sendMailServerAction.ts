'use server';

import nodemailer from 'nodemailer';

const getRequiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

async function sendEmail(fullname: string, email: string, message: string) {
  try {
    const mailPort = Number(getRequiredEnv('NODEMAILER_PORT'));
    if (Number.isNaN(mailPort)) {
      throw new Error('NODEMAILER_PORT must be a valid number');
    }

    const safeFullname = escapeHtml(fullname);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const transporter = nodemailer.createTransport({
      host: getRequiredEnv('NODEMAILER_HOST'),
      port: mailPort,
      auth: {
        user: getRequiredEnv('NODEMAILER_USER'),
        pass: getRequiredEnv('NODEMAILER_PASS'),
      },
    });

    const mailOptions = {
      from: getRequiredEnv('USER_MAILER'),
      to: getRequiredEnv('USER_TO'),
      subject: `${safeFullname} sent you a message`,
      html: `
      <h1>Message from ${safeFullname}</h1>
      <p>Email: ${safeEmail}</p>
      <p>${safeMessage}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return {
      success: "Message sent successfully, I'll get back to you soon. 🤖",
    };
  } catch (error: any) {
    return {
      error:
        'There seems a problem with the email service, please try again later. 🤖',
    };
  }
}

export async function sendMessageServerAction(
  _previousState: any,
  formData: FormData
) {
  // Validate inputs first
  const fullname = (formData.get('fullname') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  // validate fullname
  if (fullname?.length <= 2) {
    return {
      fullnameError:
        'Wow, your name seems to be in stealth mode! 😄 How about unleashing the full version this time?',
    };
  }

  // validate email using regex
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return {
      emailError:
        'Oops! Looks like your email just threw a curveball at my regex skills 😅. Let’s give it another shot—what do you say?',
    };
  }

  // validate message
  if (message?.length <= 10) {
    return {
      messageError: 'That’s a bit brief! 😅 Let it flow—share the whole story!',
    };
  }

  // If validation passes, try to send email
  try {
    const response = await sendEmail(fullname, email, message);
    if (response.success) {
      return {
        success: "Message sent successfully, I'll get back to you soon. 🤖",
      };
    }
    return {
      error: 'Something went wrong, please try again later. 🤖',
    };
  } catch (error: any) {
    return {
      error: 'Something went wrong, please try again later. 🤖',
    };
  }
}
