"use client"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useMedia } from "react-use"

import NavButton from "./nav-button"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface NavigationProps {}

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
]

const Navigation = ({}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useMedia("(max-width:1024px)", false)

  const onClick = (href: string) => {
    router?.push(href)
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes?.map(({ label, href }) => (
              <Button
                key={href}
                variant={href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(href)}
                className="w-full justify-start"
              >
                {label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2  overflow-x-auto">
      {routes?.map(({ href, label }) => (
        <NavButton
          key={label}
          href={href}
          label={label}
          isActive={pathname === href}
        />
      ))}
    </nav>
  )
}

export default Navigation
