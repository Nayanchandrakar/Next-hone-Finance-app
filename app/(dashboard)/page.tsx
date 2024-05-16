"use client"

import { Button } from "@/components/ui/button"
import { useNewAccount } from "@/hooks/use-new-account"

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  const { isOpen, setIsOpen } = useNewAccount()

  return (
    <div className="">
      <Button onClick={() => setIsOpen(true)}>Add an account</Button>
    </div>
  )
}

export default HomePage
