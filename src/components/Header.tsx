import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div>
      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <h1 className={cn("text-3xl font-bold")}>🔒 AUTH</h1>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

export default Header;
