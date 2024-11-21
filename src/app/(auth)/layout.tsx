"use client";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="flex items-center justify-center bg-slate-50 h-screen w-full">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
