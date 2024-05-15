import { ClerkProvider } from "@clerk/nextjs";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Provider;
