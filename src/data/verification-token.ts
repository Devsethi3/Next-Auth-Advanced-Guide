import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });

    if (!verificationToken) return null;
    return verificationToken;

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });

    if (!verificationToken) return null;
    return verificationToken;
    
  } catch (error) {
    console.error(error);
    return null;
  }
};
