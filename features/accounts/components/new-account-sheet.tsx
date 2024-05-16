"use client"

import { FC } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useNewAccount } from "@/hooks/use-new-account"
import AccountForm from "@/components/forms/account-form"
import { z } from "zod"
import { inserAccountSchema } from "@/db/schema"
import useCreateAccount from "@/features/accounts/api/use-create-account"

interface NewAccountSheetProps {}

const formSchema = inserAccountSchema.pick({
  name: true,
})

type FormValues = z.infer<typeof formSchema>

const NewAccountSheet: FC<NewAccountSheetProps> = ({}) => {
  const { isOpen, setIsOpen } = useNewAccount()

  const mutation = useCreateAccount()

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        setIsOpen(false)
      },
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={onSubmit}
          defaultValues={{
            name: "",
          }}
          disabled={mutation.isPending}
        />
      </SheetContent>
    </Sheet>
  )
}

export default NewAccountSheet
