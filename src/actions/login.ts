"use server";

import { signIn } from "@/app/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginInput, LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

export const login = async (values: LoginInput) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid credentials",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const signInResponse = await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    }) as { error: string | undefined };

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

    throw error;
  }
};
