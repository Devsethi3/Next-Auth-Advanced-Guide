import React from "react";
import CardWrapper from "./CardWrapper";
import { FaTriangleExclamation } from "react-icons/fa6";

const ErrorCard = () => {
  return (
    <div>
      <CardWrapper
        headerLabel="Oops! Something went wrong!"
        backButtonHref="/login"
        backButtonLabel="Back to login"
      >
        <div className="w-full flex justify-center items-center">
          <FaTriangleExclamation className="w-10 h-10 text-red-500" />
        </div>
      </CardWrapper>
    </div>
  );
};

export default ErrorCard;
