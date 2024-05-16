import { ClerkProvider } from "@clerk/nextjs"
import ReactQueryProvider from "./query-provider"
import { Toaster } from "@/components/ui/sonner"

interface ProviderProps {
  children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ClerkProvider>
      <ReactQueryProvider>
        <Toaster />
        {children}
      </ReactQueryProvider>
    </ClerkProvider>
  )
}

export default Provider
