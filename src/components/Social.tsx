import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <div className="flex items-center gap-x-2 w-full">
        <Button
          variant={"outline"}
          className="w-full"
          size="lg"
          onClick={() => {}}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button
          variant={"outline"}
          className="w-full"
          size="lg"
          onClick={() => {}}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
};

export default Social;
