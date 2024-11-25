import React, { useState } from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const [isLoading, setIsLoading] = useState<{
    google?: boolean;
    github?: boolean;
  }>({});

  const onClick = async (provider: "google" | "github") => {
    try {
      setIsLoading({ ...isLoading, [provider]: true });
      await signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading({ ...isLoading, [provider]: false });
    }
  };

  return (
    <>
      <div className="flex items-center gap-x-2 w-full">
        <Button
          variant={"outline"}
          className="w-full"
          size="lg"
          onClick={() => onClick("google")}
          disabled={isLoading.google}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button
          variant={"outline"}
          className="w-full"
          size="lg"
          onClick={() => onClick("github")}
          disabled={isLoading.github}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
};

export default Social;
