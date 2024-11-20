import { LoginButton } from "@/components/LoginButton";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full flex-col gap-6">
        <div className="flex items-center gap-4">
          <FaLock className="text-6xl font-extrabold" />
          <h1 className="text-6xl font-extrabold">AUTH</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          A simple authentication service
        </p>
        <LoginButton>
          <Button>Sign In</Button>
        </LoginButton>
      </div>
    </>
  );
};

export default page;
