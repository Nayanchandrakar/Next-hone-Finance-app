import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavButtonProps {
  href: string
  label: string
  isActive: boolean
}

const NavButton = ({ href, isActive, label }: NavButtonProps) => {
  return (
    <Button
      asChild
      variant="outline"
      size="sm"
      className={cn(
        "w-full lg:w-auto  justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
        isActive ? "bg-white/10" : "bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  )
}

export default NavButton
