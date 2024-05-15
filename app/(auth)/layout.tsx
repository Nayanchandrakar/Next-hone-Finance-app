interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center w-full h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
