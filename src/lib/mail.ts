import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationTokenEmail = async (
  email: string,
  token: string
) => {
  const confirmationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>Please click the link below to confirm your email:</p>
  <a href="${confirmationUrl}">${confirmationUrl}</a>`,
  });
};
