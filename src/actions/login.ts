"use server";

import { signIn } from "@/app/auth";
import { getUserByEmail } from "@/data/user";
import { sendVerificationTokenEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginInput, LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

export const login = async (values: LoginInput) => {
  try {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        error: "Invalid credentials",
      };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
      return { error: "Email does not exist!" };
    }

    if (!existingUser.emailVerified) {
      const verificationToken = await generateVerificationToken(
        existingUser.email
      );
      await sendVerificationTokenEmail(
        verificationToken.token,
        verificationToken.email
      );
      
      return { success: "Confirmation email sent!" };
    }

    const signInResponse = (await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })) as { error: string | undefined };

    if (signInResponse?.error) {
      return { error: "Invalid credentials" };
    }

    return { success: "Logged in successfully!" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    console.error("Login error:", error);
    return { error: "Database connection error. Please try again later." };
  }
};
